import React, {Component} from "react";
import {Link} from "react-router-dom";

class PlyListGen extends Component{
    render(){
        return(
            <div className="container">
                <header><h1>Playlist Generator</h1></header>
                <div className="card">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/PlaylistPg">My Playlist</Link></li>
                        <li><Link to="/PlyListGen">Generate List</Link></li>
                        <li><Link to="/">Sign Out</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PlyListGen;