import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import image from "../Assets/Image.jpeg";

function LoginPg(props) {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();


    async function handleSubmit(event){

        console.log("execute");
        event.preventDefault();

        await context.signIn(emailRef.current.value, passwordRef.current.value);

        if(context.currentUser != null)
        {
            context.setErrors(null, false);
            navigate("/Home");

        }
        else {
            setErrors(context.errors);
        }
    }

    return (
        <div className="container">
            <div className="card m-5 p-4">
                <div className="card-body">

                    <center>
                        <img className="card-img-top" src={image}  alt="Image" />
                        <br/>
                        <br/>
                        <form onSubmit={handleSubmit}>
                            {
                                errors && errors.length > 0 ?
                                    <div className="alert alert-danger">{errors[0].err.message}</div>
                                    :""
                            }
                        <div className="input-group mb-3 w-50 center">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                            <input type="email" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1" required ref={emailRef}/>
                        </div>
                        <div className="input-group mb-6 w-50 center">
                            <span className="input-group-text" id="basic-addon2">Password</span>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Username"
                                   aria-describedby="basic-addon2" required ref={passwordRef}/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-dark btn-lg">LOGIN</button>
                        </form>
                    </center>


                    <Link to="/SignUp"><div id="Lnt">Sign Up</div></Link>
                    <br/>
                    <a href=""><div id="Lnt">Forgotten password?</div></a>
                    <br/>

                </div>
            </div>
        </div>
    );
}

export default LoginPg;
