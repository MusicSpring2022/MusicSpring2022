import {Link} from "react-router-dom";


function SignUp() {
    return (
        <div className="container">
            <div className="card m-5 p-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Create An Account</h2>
                    <h5 className="card-subtitle mb-2 text-muted text-center">Create an account to enjoy full experience</h5>
                    <br/>
                    <br/>
                    <center>
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
                        <button type="button" className="btn btn-dark btn-lg">Create Account</button>
                    </center>
                <Link to="/"><div id="Lnt">Back</div></Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;