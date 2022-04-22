import React, {Component} from 'react';
import axios from "axios";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";


export const AuthContext = React.createContext({
    currentUser: {},
    cart:[],
    errors: [],
    refresh: null,
    uidNum: [],
    setErrors: () =>{},
    setCurrentUser: () => {},
    addToCart: () =>{},
    removeFromCart: () => {},
    signIn: () =>{},
    signOut: () =>{},
    signUp: () =>{},
    uid: ()=>{}

})

export class AuthProvider extends Component {
    uidNum;

    state = {
        currentUser: {},
        setErrors: (errObject, append) => {
            if(append)
            {
                let e = this.state.errors;
                e.push(errObject);
                this.setState({errors: e});
            }
            else{
                this.setState({errors: [errObject]});
            }
        },
        setCurrentUser: user =>{
            this.setState({currentUser: user})
        },
        addToCart: item =>{
            let cart = this.state.cart;
            cart.push(item);
            this.setState({cart: cart});
        },
        removeFromCart: item => {
            let cart = this.state.cart;
            cart = cart.filter( (val, idx, arr) => {
                return val !== item;
            });
            this.setState({cart: cart});
        },
        signIn: async (email, password)=>{

            const firebaseConfig = {
                apiKey: "AIzaSyCU3ekkEysFiL-mshj5x57cLI6PvEtE1l8",
                authDomain: "musicly-82c0c.firebaseapp.com",
                projectId: "musicly-82c0c",
                storageBucket: "musicly-82c0c.appspot.com",
                messagingSenderId: "1065242604129",
                appId: "1:1065242604129:web:65282615c80b4c8f59f020"
            };

            // Initialize Firebase
            initializeApp(firebaseConfig);

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(async (cred)=>{
                    console.log(cred.user.uid);
                    this.uidNum = cred.user.uid;


                    let user = cred.user;
                    let res = await user.getIdTokenResult(false);
                    let token = res.token;
                    localStorage.setItem("firebaseResponse", JSON.stringify(res));
                    let headers = {"Authorization": "Bearer " + token}

                    await axios.post ("http://localhost:8080/auth/session", document.body, {
                        headers: headers,
                        context: document.body
                    }).then((res)=>{
                        this.state.setCurrentUser(res.data.User);
                        localStorage.setItem("user", JSON.stringify(this.state.currentUser));
                    }).catch((err) => {
                        console.log(err);
                        this.state.setErrors(err.response.data, false);
                    })

                })
                .catch(function (err) {
                    // Handle Errors here.
                    console.log(this)
                    this.setCurrentUser(null);
                   this.setErrors(err.response, false);
                });

            //refersh token every 30 minutes
            this.state.refresh = setInterval(this.getRefresh, 300000, auth)
        },
        signOut: async ()=>{
            await axios.get("http://localhost:3000/logout").then( res =>{
                this.state.setCurrentUser({});
                localStorage.removeItem("user");
                localStorage.removeItem("firebaseResponse");
                //stop token refresh
                clearInterval(this.state.refresh );
            }).catch(err => console.log(err));
        },

        signUp: async (email, password)=>{
            const firebaseConfig = {
                apiKey: "AIzaSyCU3ekkEysFiL-mshj5x57cLI6PvEtE1l8",
                authDomain: "musicly-82c0c.firebaseapp.com",
                projectId: "musicly-82c0c",
                storageBucket: "musicly-82c0c.appspot.com",
                messagingSenderId: "1065242604129",
                appId: "1:1065242604129:web:65282615c80b4c8f59f020"
            };

            // Initialize Firebase
            initializeApp(firebaseConfig);


            const auth = getAuth();
            let flag = false;

            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    // ...
                    flag = true;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    this.state.setErrors(error.response.data, false);
                    // ..
                });
            return flag;
        },

        uid: async ()=>{
            console.log(JSON.stringify(this.uidNum));
            return JSON.stringify(this.uidNum);
        }
    }

    getRefresh(auth){

        auth.currentUser.getIdToken(true).then((response)=>{
            let fbResponse = localStorage.getItem("firebaseResponse")
            fbResponse = (fbResponse ? JSON.parse(fbResponse) : {})
            fbResponse.token = response.id_token;
            localStorage.setItem("firebaseResponse", JSON.stringify(fbResponse))
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {

        const { children } = this.props
        const {currentUser, errors, cart,refresh, setErrors, setCurrentUser, signIn, signOut, signUp, addToCart, removeFromCart, uid } = this.state

        return (
            <AuthContext.Provider value={{currentUser, errors, cart, refresh, setErrors, setCurrentUser, signIn, signOut, signUp, addToCart, removeFromCart, uid}}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export const AuthConsumer = AuthContext.Consumer;
