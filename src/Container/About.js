
import indianlogo from '../india0.jpg'
import culture1 from '../Image/culture/indian-culture1.jpg'
import culture2 from '../Image/culture/indian-culture2.jpg'
import culture3 from '../Image/culture/indian-culture3.jpg'
import cultureDesert from '../Image/culture/indian-desert.jpg'
import indianAncient from '../Image/culture/indian-ancient.jpg'
import Footer from './Footer'
const About = () => {
    return (
        <>
            <div className="container aboutPage ">
            </div>
            <div className="container my-4 " >
                <h1 className="text-center" style={{ color: "#005870" }}>About India</h1>
                <p className="text-center" style={{ letterSpacing: "6px" }}>The main reason why India is famous for tourism means all
                    type of tourist destinations in one place. India is the right
                    place for wild safaris, desert safaris, nature seeking places,
                    honeymoon spot, adventurous activities, spiritual places, and historical places of India.</p>
                <hr />
            </div>
            <div className="container-fluid">
                <div className="container">
                    <h4 className="text-center" style={{ color: "#005870" }}>Indian Culture</h4>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xl-4 my-2">
                            <img src={culture1} className="" style={{ width: "300px", height: "200px", borderRadius: "20px" }} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xl-4 my-2">
                            <img src={culture2} className="" style={{ width: "300px", height: "200px", borderRadius: "20px" }} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xl-4 my-2">
                            <img src={culture3} className="" style={{ width: "300px", height: "200px", borderRadius: "20px" }} alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container ">
                    <h4 className="text-center" style={{ color: "#005877", fontSize: "25px" }}>Indian Desert</h4>
                    <div className="row">
                        <div className=" col-sm-12 col-md-6 ">
                            <h4 className="text-center" style={{ color: "#005877", fontSize: "15px" }}>Indian Desert</h4>
                            <p className="text-center" style={{ letterSpacing: "6px" }}>The Thar Desert, also known as the
                                Great Indian Desert, is a large, arid region in the northwestern part of the Indian subcontinent
                                that covers an area of 200,000 km2 (77,000 sq mi) and forms a natural boundary between India and Pakistan.
                                It is the world's 17th-largest desert, and the world's 9th-largest hot subtropical desert.
                                About 85% of the Thar Desert is located within India, and the remaining 15% is in Pakistan.
                                The Thar Desert forms about 4.56% of the total geographic area of India.
                            </p></div>
                        <div className=" col-sm-12 col-md-6 ">
                            <div className="pl-2" ><img src={cultureDesert} className="" style={{ width: "400px", height: "350px" }} alt="" /></div>
                        </div>
                    </div>

                    <h4 className="text-center my-3" style={{ color: "#005877", fontSize: "25px" }}>Indian Ancient</h4>
                    <div className="row my-3">
                        <div className=" col-sm-12 col-md-6 ">
                            <div className="pl-2" ><img src={indianAncient} className="" style={{ width: "400px", height: "350px" }} alt="" /></div>
                        </div>
                        <div className=" col-sm-12 col-md-6 ">
                            <h4 className="text-center" style={{ color: "#005877", fontSize: "15px" }}>Indian Ancient</h4>
                            <p className="text-center" style={{ letterSpacing: "6px" }}>The History of India begins with the
                                birth of the Indus Valley Civilization, more precisely known as Harappan Civilization. It flourished
                                around 2,500 BC, in the western part of South Asia, what today is Pakistan and Western India.
                                The Indus Valley was home to the largest of the four ancient urban civilizations of Egypt, Mesopotamia,
                                India and China. Nothing was known about this civilization till 1920s when the Archaeological
                                Department of India carried out excavations in the Indus valley
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default About;