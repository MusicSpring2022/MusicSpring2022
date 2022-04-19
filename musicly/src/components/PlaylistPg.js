import React, {Component} from "react";
import {Link} from "react-router-dom";

class PlaylistPg extends Component {
    constructor(props) {
        super(props);
        this.state = {playlist: [[]], /*IDs: []*/};
    }


    componentDidMount() {
        let num = 0;
        // while(num < 5) {
        //     const getDbPlaylist = async (playlistID) => {
        //
        //         const URL = 'https://api.spotify.com/v1/playlists/'+ playlistID;
        //         const result = await fetch(URL, {
        //             method: 'GET',
        //             headers: { 'Authorization' : 'Bearer ' + token}
        //         })
        //             .then(res => res.json())
        //             //.then(data => console.log(data.playlists.items[0].images[0].url))
        //             .then(data => assignPY(data.playlists.items));
        //
        //
        //     }
        //
        //     let assignPY = (x) => {
        //         this.pushState({playlist: x}, "")
        //         console.log(x);
        //     }
        // }
    }


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
                            {/*<div className="row">*/}
                            {/*    {*/}
                            {/*        this.state.playlist.map((playlist)=>{*/}
                            {/*            //Button to add playlist ID to DB*/}
                            {/*            let handleClick = () => {*/}
                            {/*                //Store playlist ID in Firebase*/}
                            {/*                console.log("Hello World");*/}
                            {/*            }*/}
                            {/*            let iurl = ""*/}
                            {/*            if(playlist.images)*/}
                            {/*                iurl = playlist.images[0].url;*/}
                            {/*            return(*/}
                            {/*                <div className="col-md-6 mb-3">*/}
                            {/*                    <div className="card h-100 position-relative">*/}
                            {/*                        <img className="card-img-top mx-auto pt-1" src={iurl} className="card-img-top book-img mx-auto pt-1" alt='' />*/}
                            {/*                        <div className="card-body book-card-details" >*/}
                            {/*                            <h5 className="card-title on-list">{playlist.name}</h5>*/}
                            {/*                            <h7 className="card-title text-muted">Description: {playlist.description}</h7>*/}
                            {/*                            <h6 className="card-subtitle mb-2">{}</h6>*/}
                            {/*                            <p className="card-text">{}</p>*/}
                            {/*                        </div>*/}
                            {/*                        <br/>*/}
                            {/*                        <br/>*/}
                            {/*                        <button className="btn btn-light" onClick={handleClick}>Save playlist</button>*/}

                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            )*/}

                            {/*        })*/}

                            {/*    }*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistPg;
