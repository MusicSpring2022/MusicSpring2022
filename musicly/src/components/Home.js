import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";
import Prac from "./Prac";

class Home extends Component{
    //Creates a state variable
    constructor(props) {
        super(props);
        this.state = {playlist: []}
    }

    componentDidMount() {
        //Values needed to access database to get key
        const client_id = 'a8e0da5091d94622922e03b1d4ea4542';
        const client_secret = 'a91f8fb1acd744bf8622212d7aa23713';

        //Function (Post method) to get API key
        const getToken = async () => {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                },
                body: 'grant_type=client_credentials'
            });
                const data = await result.json();
                return data.access_token;
        }

        let token = getToken();

        console.log(token);
    }

    render() {
            return (
                <div>
                    <div className="d-flex" id="wrapper">

                        <div className="border-end bg-white" id="sidebar-wrapper">
                            <div className="sidebar-heading border-bottom bg-light">Musicly</div>
                            <div className="list-group list-group-flush">
                                <Link to="/Home"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Home</a></Link>
                                <Link to="/PlaylistPg"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Playlist</a></Link>
                                <Link to="/PlyListGen"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Generate Playlist</a></Link>
                                <Link to="/"><a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">SignOut</a></Link>
                                <Link to="/Prac">Prac</Link>
                            </div>
                        </div>

                        <div id="page-content-wrapper">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                                <div className="container-fluid">
                                    <div className="nav-item text-muted" id="sidebarToggle"><h2>Home</h2></div>
                                </div>
                            </nav>
                            <div className="container">
                                <h2></h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Home;
