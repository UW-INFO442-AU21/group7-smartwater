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
            <div className={activity}>
                <NavLink className="link" exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink className="link" exact to="/kitchen" activeClassName="activeLink">Kitchen</NavLink>
                <NavLink className="link" exact to="/calculator" activeClassName="activeLink">Calculator</NavLink>
            </div>
        </nav>  
    );
}

export { NavBar };