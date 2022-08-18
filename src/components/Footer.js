import "../assets/style/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="soc-btn">
                        <FontAwesomeIcon className="fb" icon={faFacebook} />
                        <FontAwesomeIcon className="ln" icon={faLinkedin} />
                        <FontAwesomeIcon className="github" icon={faGithub} />
                        <FontAwesomeIcon className="gplus" icon={faGooglePlus} />
                    </div>
                    <p>&copy; 2022 Վազգեն Հայրապետյան</p>
                </div>
            </footer>
        </>
    );
}