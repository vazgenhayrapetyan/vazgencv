import "../assets/style/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import "../assets/style/logos.scss";

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
                                <FontAwesomeIcon className="fb" icon={faFacebook} />
                                <FontAwesomeIcon className="ln" icon={faLinkedin} />
                                <FontAwesomeIcon className="github" icon={faGithub} />
                                <FontAwesomeIcon className="gplus" icon={faGooglePlus} />
                            </div>
                            <div className="contact-me">
                                <a className="item" href="/contact">Կապ հաստատեք ինձ հետ</a>
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
                        <p>Ունեմ մեծ հետաքրքրություններ էլեկտրոտեխնիկայի, նորագույն տեխնոլոգիաների, ռոբոտացված համակարգերի աշխատանքի, ծրագրավորման և զարգացման ճյուղերում։ Մշտապես զբաղվել եմ ինքնակրթվելով։ </p>
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