import React from "react";
import HeaderCss from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
	return (
        <header className={HeaderCss.header}>    
            <Logo/>        
            <Navigation/>
        </header>
    )
}

export default Header;