import React, {Component, useContext} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class PlaylistPg extends Component {
    constructor(props) {
        super(props);
        this.state = {playlist: [[]], uidNum: null, playlistId: []};
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        let uidNum = user.uid;
        //Values needed to access database to get key
        const client_id = 'a8e0da5091d94622922e03b1d4ea4542';
        const client_secret = 'a91f8fb1acd744bf8622212d7aa23713';
        var num;


        const getLists = async () => {
            let listData = [];
            await axios.get("http://localhost:8080/api/PlaylistID/" + uidNum)
                .then((res) => {
                    //console.log(res.data[0].playlistItems);
                    //Has ply ids
                    this.setState({playlistId: res.data[0].playlistItems});
                    let id = res.data[0].playlistItems;
                    //make spotify call
                    //get token
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
                            .then(data => {
                                assignTK(data.access_token, id);
                            })
                            .then(() => console.log(num));


                        const getDbPlaylist = async (id, tk) => {

                            const URL = 'https://api.spotify.com/v1/playlists/' + tk;
                            const result = await fetch(URL, {
                                method: 'GET',
                                headers: {'Authorization': 'Bearer ' + id}
                            })
                                .then(res => res.json())
                                //.then(data => console.log(data.playlists.items[0].images[0].url))
                                .then(data => assignPY(data.playlists.items));


                        }

                        let assignTK = (x, pyID) => {
                            let num = x;
                            let y = pyID;
                            console.log(num);
                            console.log(y);
                            getDbPlaylist(num, y);
                            return num;
                        }

                        let assignPY = (x) => {
                            this.pushState({playlist: x}, "")
                            console.log(x);
                        }
                    }


                    getToken();

                })


        }


        getLists()


    }

    render(){
        console.log(this.state.playlistId);
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
                            <div className="row">
                                {
                                    this.state.playlist.map((playlist)=>{
                                        //Button to add playlist ID to DB
                                        let handleClick = () => {
                                            //Store playlist ID in Firebase
                                            console.log("Hello World");
                                        }
                                        let iurl = ""
                                        if(playlist.images)
                                            iurl = playlist.images[0].url;
                                        return(
                                            <div className="col-md-6 mb-3">
                                                <div className="card h-100 position-relative">
                                                    <img className="card-img-top mx-auto pt-1" src={iurl} className="card-img-top book-img mx-auto pt-1" alt='' />
                                                    <div className="card-body book-card-details" >
                                                        <h5 className="card-title on-list">{playlist.name}</h5>
                                                        <h7 className="card-title text-muted">Description: {playlist.description}</h7>
                                                        <h6 className="card-subtitle mb-2">{}</h6>
                                                        <p className="card-text">{}</p>
                                                    </div>
                                                    <br/>
                                                    <br/>
                                                    <button className="btn btn-light" onClick={handleClick}>Save playlist</button>

                                                </div>
                                            </div>
                                        )

                                    })

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistPg;
