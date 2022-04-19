import React, {useContext} from "react";
import { Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function Logout(props) {
    const context = useContext(AuthContext);
    context.signOut();
    return (
        <Navigate to="/"/>
    );
}

export default Logout;
