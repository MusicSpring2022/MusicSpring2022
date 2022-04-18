import {Link, useNavigate} from "react-router-dom";
import React, {useContext, useRef, useState} from "react";
import {AuthContext} from "../context/AuthContext";

function SignUp() {

    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    async function handelSubmit(event) {
        event.preventDefault();
        let x = await context.signUp(emailRef.current.value, passwordRef.current.value);

        if(x){
            navigate("/");
        }
        else {
            setErrors(context.errors);
        }

    }
    return (
        <div className="container">
            <div className="card m-5 p-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Create An Account</h2>
                    <h5 className="card-subtitle mb-2 text-muted text-center">Create an account to enjoy full experience</h5>
                    {
                        errors && errors.length > 0 ?
                            <div className="alert alert-danger">{errors[0].err.message}</div>
                            :""
                    }
                    <br/>
                    <br/>
                    <form onSubmit={handelSubmit}>
                    <center>
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
                        <button type="submit" className="btn btn-dark btn-lg">Create Account</button>
                    </center>
                    </form>
                <Link to="/"><div id="Lnt">Back</div></Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
