import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/style/style.scss";

export default function Project() {
    return (
        <>
        <Header />
        <div className="container">
        <div className="section-title">
                <div className="edu-bg">
                    <h1>Ուսում և վկայականներ</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="stud">
                    <div className="col-20 stud-image">
                        <img src={require('../assets/image/nuaca.PNG')} />
                    </div>
                    <div className="col-80 stud-body">
                        <div className="stud-body-title">
                            <h1>Ճարտարապետության և շինարարության Հայաստանի ազգային համալսարան</h1>
                        </div>
                        <div className="stud-body-body">
                            <p>Ինֆորմատիկա, հաշվողական տեխնիկա և կառավարման համակարգեր</p>
                            <p className="date">2014-2021թթ․</p>
                        </div>
                    </div>
                </div>
                <div className="stud">
                    <div className="col-20 stud-image">
                        <img src={require('../assets/image/js-certificate.png')} />
                    </div>
                    <div className="col-80 stud-body">
                        <div className="stud-body-title">
                            <img src={require('../assets/image/sololearn.png')} /><h1>SoloLearn</h1>
                        </div>
                        <div className="stud-body-body">
                            <p>Javascript առցանց դասընթացների վկայական</p>
                            <p className="date">2020թ․</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}