import React, {Component} from "react";
import { Link } from "react-router-dom";


function Prac(){
    return(
        <div>
        <div className="d-flex" id="wrapper">

            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush">
                    <Link to="/Home"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Home</a></Link>
                    <Link to="/PlaylistPg"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Playlist</a></Link>
                    <Link to="/PlyListGen"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Generate Playlist</a></Link>
                    <Link to="/"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">SignOut</a></Link>
                </div>
            </div>

            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                    </div>
                </nav>

                <div className="container-fluid">
                    <h1 className="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear
                        non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Prac;