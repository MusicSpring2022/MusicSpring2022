// import logo from './Assets/logo.svg';
// import './App.css';
import React, {Component} from "react";
import "./bar2.css";


function Prac() {

        function openNav() {
        document.getElementById("mySidebar").style.width = "650px";
        document.getElementById("main").style.marginLeft = "250px";
    }

        function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }


    return (
        <>
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div id="main">
                <button class="openbtn" onclick="openNav()"> Open Sidebar</button>
                <h2>Collapsed Sidebar</h2>
                <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
            </div>


        </>
    );

}

export default Prac;
