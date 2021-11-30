import React from 'react';
import { NavLink } from 'react-router-dom';

// This function displays the navbar with 3 navlink
function NavBar(props) {
    let activity;
    if (props.user) {
        activity = "active";
    } else {
        activity = "hidden";
    }
    return (
        <nav id="navbar">
            <div id="title">
                <h1>H₂Know</h1>
            </div>
            <div id="links" className={activity}>
                <NavLink className="link" exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink className="link" exact to="/kitchen" activeClassName="activeLink">Kitchen</NavLink>
                <NavLink className="link" exact to="/calculator" activeClassName="activeLink">Bathroom</NavLink>
            </div>
        </nav>  
    );
}

export { NavBar };