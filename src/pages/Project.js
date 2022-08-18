import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/style/style.scss";

export default function Project() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="section-title">
                <div className="proj-bg">
                    <h1>Նախագծեր</h1>
                </div>
            </div>
            <div className="">
                <div className="row projects">
                    <div className="project">
                        <div className="col-60 proj-image">
                            <img src={require('../assets/image/venusam.PNG')} />
                        </div>
                        <div className="col-40 proj-body">
                            <div className="proj-body-title">
                                <a href="https://venus.am" target="_blank"><h1>Venus.am</h1></a>
                            </div>
                            <div className="proj-body-body">
                                <p>HTML5 + CSS3</p>
                                <p>Javascript</p>
                                <p>PHP</p>
                                <p>OpenCart CMS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}