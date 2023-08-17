import "./navbar.css";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import menuItems from "./MenuItems";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState("");
    const [actives, setActives] = useState(false);

    const handleClicks = () => {

        setActives(!actives);
    };

    const handleClick = (url) => {
        setActive(url);
        navigate(url);
        setActives(false);
    };

    return (
        <nav className="navbar">
            <span className="navbar-logo">
                IMMIGRANT-EMPORIUM
            </span>
            <div className="menu-icon" onClick={handleClicks}>
                {actives ? <CloseIcon /> : <MenuIcon />}
            </div>
            {/* <ul className={active ? "nav-menu active" : "nav-menu"}> */}
            <ul className={actives ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {/* <span onClick={() => navigate(item.url)} href={item.url} className={item.cName}>
                                {item.title}
                            </span> */}
                            <span
                                onClick={() => handleClick(item.url)}
                                className={item.url === active ? `${item.cName} actives` : item.cName}
                            >
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
