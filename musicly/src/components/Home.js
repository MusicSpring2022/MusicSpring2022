import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";
import axios from "axios";
import Prac from "./Prac";

class Home extends Component{
    //Creates a state variable
    constructor(props) {
        super(props);
        this.state = {playlist: [[]]}
    }

    componentDidMount() {
        //Values needed to access database to get key
        const client_id = 'a8e0da5091d94622922e03b1d4ea4542';
        const client_secret = 'a91f8fb1acd744bf8622212d7aa23713';
        var num;


        //Async Function (Post method) to get API key
        const getToken = async () => {
            //Fetch using spotify base URL and headers containing client id & secret
                const result = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                    },
                    body: 'grant_type=client_credentials'
                })
                    //Then response with assign function to access variable in promise
                    .then(res => res.json())
                    .then(data => assignTK(data.access_token))
                    .then(() => console.log(num));

        }

        //Function getting featured spotify playlist using token
        const getPlaylist = async (token) => {

            const limit = 10;
            const plyListURL = 'https://api.spotify.com/v1/browse/featured-playlists?limit=13';
            const result = await fetch(plyListURL, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            })
                .then(res => res.json())
                .then(data => assignPY(data.playlists.items));


        }

        //Calls get token
        getToken();

        //Assigns function and calls getPlaylist with token
        let assignTK = (x) => {
            num = x;
            console.log(num);
            getPlaylist(num);
            return num;
        }

        //Sets response from getplaylist function into playlist state variable
        let assignPY = (x) => {
            this.setState({playlist: x})
            console.log(x);
        }

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
                            <br/>
                            <br/>
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.playlist.map((playlist)=>{
                                            return(
                                                <div className="col mb-3" >
                                                    <div className="card h-100 position-relative">
                                                        <img className="card-img-top mx-auto pt-1" src={playlist.images} className="card-img-top book-img mx-auto pt-1" alt='' />
                                                        <div className="card-body book-card-details" >
                                                            <h5 className="card-title on-list">{playlist.name}</h5>
                                                            <h7 className="card-title text-muted">Description: {playlist.description}</h7>
                                                            <h6 className="card-subtitle mb-2">{}</h6>
                                                            <p className="card-text">{}</p>
                                                        </div>
                                                        <a target="" rel="noreferrer" href='' className="btn btn-secondary buy">Add</a>
                                                    </div>
                                                </div>
                                            )
                                        })

                                    }
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Home;

//JSON.stringify(this.state.playlist[0].name)
