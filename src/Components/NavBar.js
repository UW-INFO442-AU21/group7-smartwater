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
            <div id="title" style={{display : 'inline'}}>
                <h1>
                    <NavLink className="link" exact to="/" activeClassName="activeLink">H₂Know</NavLink>
                </h1>
            </div>
            <div id="links" className={activity}>
                <h1>
                <NavLink className="link" exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink className="link" exact to="/kitchen" activeClassName="activeLink">Kitchen</NavLink>
                <NavLink className="link" exact to="/calculator" activeClassName="activeLink">Bathroom</NavLink>
                </h1>
            </div>
        </nav>  
    );
}

export { NavBar };