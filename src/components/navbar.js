import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="nav-warpper red darken+5">
            <div className="container">
                <a href="./" className="brand-logo ">todo list</a> 
                <ul className ="right">
                    {/*using link or Navlink instead of a tag prevent the default refresh as asking server*/}
                    <li><NavLink  to="./">Todolist         </NavLink> </li>
                    <li><NavLink  to="./about.js">About    </NavLink> </li>
                    <li><NavLink  to="./contact.js">Contact</NavLink> </li>
                    <li><NavLink  to="./updates.js">Updates</NavLink> </li>
                </ul> 
            </div>
        </nav>
    )
}
export default Navbar;