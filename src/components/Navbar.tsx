import React from "react";
import logo from '../logo.png'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar: React.FC = () =>{
    return <>
        <nav>
            <div className="nav-wrapper purple darken-1 px1">
                <a href="/" className="brand-logo"><img className={s.logo} src={logo} alt="logo"/></a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todos list</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
};
