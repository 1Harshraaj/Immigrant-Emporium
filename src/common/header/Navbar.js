import "./navbar.css";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import menuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">
                {/* <img src={"logo"} className="nav-logo" alt="logos" /> */}
                IMMIGRANT-EMPORIUM
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                {active ? <CloseIcon /> : <MenuIcon />}
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <span onClick={() => navigate(item.url)} href={item.url} className={item.cName}>
                                {item.title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
