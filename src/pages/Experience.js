import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/style/style.scss";

export default function Project() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="section-title">
                <div className="exp-bg">
                    <h1>Փորձ</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="stud">
                    <div className="col-20 stud-image">
                        <img src={require('../assets/image/venus-logo.png')} />
                    </div>
                    <div className="col-80 stud-body">
                        <div className="stud-body-title">
                            <h1>Վենուս էլեկտրոտեխնիկա</h1>
                        </div>
                        <div className="stud-body-body">
                            <p>Վեբ ծրագրավորում / կայքի կոնտենտի թարմացում</p>
                            <p className="date">2020թ․-</p>
                        </div>
                    </div>
                </div>
                <div className="stud">
                    <div className="col-20 stud-image">
                        <img src={require('../assets/image/venus-logo.png')} />
                    </div>
                    <div className="col-80 stud-body">
                        <div className="stud-body-title">
                            <h1>Վենուս էլեկտրոտեխնիկա</h1>
                        </div>
                        <div className="stud-body-body">
                            <p>Վաճառող խորհրդատու</p>
                            <p className="date">2018-2020թթ․</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}