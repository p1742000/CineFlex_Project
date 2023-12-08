import React, {useState} from 'react';
import './Navbar.css'
const Navbar = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.srch);
        // props.jayraj('tvshows')
        props.jayraj('msrch')
    }

    return (

            <div className="root">
                <div className="main-container" >
                    <div className="links">
                    <a href="#" onClick={() => {props.jayraj('home')}}>Home</a>
                    <a href="#" onClick={() => {props.jayraj('tvshows')}}>TV Shows</a>
                    <a href="#" onClick={() => {props.jayraj('contacts')}}>Contacts</a>
                    <a href="#" onClick={() => {props.jayraj('testMe')}}>TestArea</a>
                    </div>


                    <form onSubmit={handleSubmit} className="search-box">
                        <div className="navbar-input">
                        <input  type="text" autoComplete="off" placeholder="Search ..." name="search"
                               value={props.srch} onChange={(e) => {props.setSrch(e.target.value)}}
                               className="search-movie" id="search-movie"/>
                        </div>

                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>

                </div>

            </div>
    );
};

export default Navbar;