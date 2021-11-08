import './header.scss';
import React, { useContext } from "react";
import { ThemeContext } from '../../context/themeContext';
import LogoLight from "../../assets/images/logo-desktop.svg"
import LogoDark from "../../assets/images/logo-mobile-modo-noct.svg"

function Header() {
    //Contexto ThemeContext
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    return (
        <header>
            <div className="bar"></div>
            <div className="header-container">
                <figure>
                    <img src={darkTheme ? LogoDark : LogoLight} alt="Logo" />
                </figure>
                <button
                    className="btn"
                    onClick={() => setDarkTheme(!darkTheme)}>
                    {`MODO ${darkTheme ? "LIGHT" : "DARK"}`}
                </button>
            </div>  
        </header>
    )
}

export default Header;