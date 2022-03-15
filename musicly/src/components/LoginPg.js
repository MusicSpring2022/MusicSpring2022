import { Link } from "react-router-dom";
import image from "../Image.jpeg";

function LoginPg() {
    return (
        <div className="container">
            <div className="card m-5 p-4">
                <div className="card-body">

                    <center>
                        <img className="card-img-top" src={image}  alt="Image" />
                        <br/>
                        <br/>
                        <div className="input-group mb-3 w-50 center">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-6 w-50 center">
                            <span className="input-group-text" id="basic-addon2">Password</span>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Username"
                                   aria-describedby="basic-addon2"/>
                        </div>
                        <br/>
                        <button type="button" className="btn btn-dark btn-lg">LOGIN</button>
                    </center>
                    <Link to="/SignUp"><div id="Lnt">Sign Up</div></Link>
                    <br/>
                    <a href=""><div id="Lnt">Forgotten password?</div></a>
                    <br/>
                    <Link to="/Home"><div id="Lnt">Home</div></Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPg;