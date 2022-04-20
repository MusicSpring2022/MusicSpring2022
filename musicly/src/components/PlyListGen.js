import React, {Component} from "react";
import {Link} from "react-router-dom";
import survey from "../Assets/musicSurvey.jpg"
class PlyListGen extends Component{

    render(){
        {
            window.addEventListener('DOMContentLoaded', event => {

                // Toggle the side navigation
                const sidebarToggle = document.body.querySelector('#sidebarToggle');
                if (sidebarToggle) {
                    // Uncomment Below to persist sidebar toggle between refreshes
                    if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                        document.body.classList.toggle('sb-sidenav-toggled');
                    }
                    sidebarToggle.addEventListener('click', event => {
                        event.preventDefault();
                        document.body.classList.toggle('sb-sidenav-toggled');
                        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
                    });
                }

            })
        }
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
                                <div className="nav-item text-muted" id="sidebarToggle"><h2>Generate Playlist</h2></div>
                            </div>
                        </nav>
                        <br/>
                        <br/>
                        <br/>

                        <div className="container">
                            <div className="mx-0 mx-sm-auto">
                                <div className="card">
                                    <div className="card-header bg-secondary">
                                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">
                                            Help us find your perfect playlist
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <div className="text-center">
                                            <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                                            <p>
                                                <strong>Genre</strong><br/>
                                                Preferred genre?
                                            </p>
                                        </div>

                                        <hr/>

                                        <form className="px-4" action="">

                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="exampleForm"
                                                       id="radio3Example1"/>
                                                <label className="form-check-label" htmlFor="radio3Example1">
                                                    Hip-Hop
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="exampleForm"
                                                       id="radio3Example2"/>
                                                <label className="form-check-label" htmlFor="radio3Example2">
                                                    Alternative Pop
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="exampleForm"
                                                       id="radio3Example3"/>
                                                <label className="form-check-label" htmlFor="radio3Example3">
                                                    Slow jamz
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="exampleForm"
                                                       id="radio3Example4"/>
                                                <label className="form-check-label" htmlFor="radio3Example4">
                                                    Rock
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="radio" name="exampleForm"
                                                       id="radio3Example5"/>
                                                <label className="form-check-label" htmlFor="radio3Example5">
                                                    Oldies
                                                </label>
                                            </div>

                                            <p className="text-center"><strong>Something we missed?</strong></p>

                                            <div className="form-outline mb-4">
                                                <textarea className="form-control" id="form4Example3"
                                                          rows="4"></textarea>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="card-footer text-end">

                                        <button type="button" className="btn btn-secondary">Next</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default PlyListGen;
