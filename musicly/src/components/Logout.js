import React, {useContext} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function Logout(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    context.signOut();
    return (
         <Navigate to="/"/>
       // navigate("/")
    );
}

export default Logout;
