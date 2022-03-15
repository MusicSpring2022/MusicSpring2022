import React, {Component} from "react";
import {Link} from "react-router-dom";

class PlaylistPg extends Component {
    render(){
        return(
            <div>
                <div className="d-flex" id="wrapper">

                    <div className="border-end bg-white" id="sidebar-wrapper">
                        <div className="sidebar-heading border-bottom bg-light">Musicly</div>
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
                                <div className="nav-item text-muted" id="sidebarToggle"><h2>Playlist Page</h2></div>
                            </div>
                        </nav>
                        <div className="container">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistPg;