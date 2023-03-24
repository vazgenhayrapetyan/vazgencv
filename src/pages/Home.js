import "../assets/style/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import "../assets/style/logos.scss";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="home">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="hello-text">
                            <h2>Ողջույն 👋</h2>
                            <h1>Ես Վազգեն Հայրապետյանն եմ</h1>
                            <h4>Full Stack ծրագրավորող</h4>
                            <div className="social-btn">
                                <a href="https://www.facebook.com/HayrapetyanVazgen" target="_blank"><FontAwesomeIcon className="fb" icon={faFacebook} /></a>
                                <a href="https://www.linkedin.com/in/vazgenhayrapetyan97/" target="_blank"><FontAwesomeIcon className="ln" icon={faLinkedin} /></a>
                                <a href="https://github.com/vazgen97" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                            </div>
                            <div className="contact-me">
                            <Link className="item" to="/contact">Կապ հաստատեք ինձ հետ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="home-section-title">
                    <h1>Իմ մասին</h1>
                </div>
                <div className="row">
                    <div className="col-3 my-photo">
                        <img src={require('../assets/image/VH.jpg')} />
                    </div>
                    <div className="col-9">
                        <p>Մեծ հետաքրքրություններ ունեմ ռոբոտացված համակարգերի ստեղծման և խաղերի ծրագրավորման ուղղությամբ։ Այժմ սովորում եմ C# ծրագրավորման լեզուն, տիրապետում եմ JavaScript լեզվին։ Մշտապես փորձում եմ ինքնակրթվել և զարգացնել գիտելիքներս։</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="home-section-title">
                    <h1>Ինչ եմ ես անում</h1>
                </div>
                <div className="row">
                    {/* <div className="col-6 empl-image">
                        <img src={require('../assets/image/what-i-am-doing.jpg')} />
                    </div> */}
                    <div className="col-6 empl-text">
                        <div className="dev-tech">
                            <div className="icons8-html-5"></div>
                            <div className="icons8-css3"></div>
                            <div className="icons8-sass"></div>
                            <div className="icons8-javascript"></div>
                            <div className="icons8-nodejs"></div>
                            <div className="icons8-react-native"></div>
                            <div className="icons8-mysql-logo"></div>
                            <div className="icons8-c-sharp-logo"></div>
                        </div>
                    </div>
                    <div className="col-6 empl-text">
                        <h2>Full Stack Ծրագրավորում</h2>
                        <p>Ստեղծում եմ տարբեր բարդության կայքեր, օգտագործելով ժամանակակից տեխնոլոգիաներ</p>
                    </div>
                </div>
            </div>
            <Footer />
        </> 
    );
}