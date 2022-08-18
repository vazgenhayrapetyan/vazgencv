import React from "react";
import "../assets/style/style.scss";
import { Link } from "react-router-dom";
import "../assets/style/logos.scss";

export default function Header() {
    
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <ul>
                        <li><Link className="home-btn" to="/">Գլխավոր</Link></li>
                        <li><Link className="education" to="/education">Կրթություն և վկայականներ</Link></li>
                        <li><Link className="experience" to="/experience">Փորձ</Link></li>
                        <li><Link className="project" to="/project">Նախագծեր</Link></li>
                        <li><Link className="contact" to="/contact">Կապ և ռեզյումե</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}