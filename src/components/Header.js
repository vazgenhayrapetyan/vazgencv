import React, { Component } from "react";
import "../assets/style/style.scss";
import { Link } from "react-router-dom";
import "../assets/style/logos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
    
            <header className="header">
                <nav className="navbar">
                    <div className="fabars" onClick={this.Toggle}>
                        <FontAwesomeIcon className={this.state.toggle ? "hidden-bars" : "show-bars "} icon={faBars} />
                        <FontAwesomeIcon className={this.state.toggle ? "show-bars" : "hidden-bars"} icon={faXmark} />
                    </div>
                    <ul className={this.state.toggle ? "nav-links show-menu" : "nav-links"}>
                        <li><Link className="home-btn" to="/">Գլխավոր</Link></li>
                        <li><Link className="education" to="/education">Կրթություն և վկայականներ</Link></li>
                        <li><Link className="experience" to="/experience">Փորձ</Link></li>
                        <li><Link className="project" to="/project">Նախագծեր</Link></li>
                        <li><Link className="contact" to="/contact">Կապ և ռեզյումե</Link></li>
                    </ul>
                </nav>
            </header>
        
        );
    }
}