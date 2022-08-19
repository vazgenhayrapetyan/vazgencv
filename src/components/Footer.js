import "../assets/style/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="soc-btn">
                        <a href="https://www.facebook.com/HayrapetyanVazgen" target="_blank"><FontAwesomeIcon className="fb" icon={faFacebook} /></a>
                        <a href="https://www.linkedin.com/in/vazgenhayrapetyan97" target="_blank"><FontAwesomeIcon className="ln" icon={faLinkedin} /></a>
                        <a href="https://github.com/vazgen97" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                        <a href="" target="_blank"><FontAwesomeIcon className="gplus" icon={faGooglePlus} /></a>
                    </div>
                    <p>&copy; 2022 Վազգեն Հայրապետյան</p>
                </div>
            </footer>
        </>
    );
}