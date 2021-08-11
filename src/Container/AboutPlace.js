import { NavLink } from 'react-router-dom';
import { city } from '../City';
import Footer from './Footer';
import cart from './Cart';
import { Carousel } from 'react-bootstrap';

const AboutPlace = () => {
    const placeName = localStorage.getItem('placeName');
    console.log(placeName);
    return (
        <>
            <div className="container my-5 py-3">
                <h6 className="text-center  my-3">{placeName}</h6>
                <hr className="text-success" />

                <div className="container row">
                    <div className="col-md-7 col-sm-12 border">
                        <h6 className="text-center text-muted my-2"> {placeName} </h6>
                        <hr />
                        {
                            city.map((data) => {
                                if (data.cityName == placeName) {
                                    return (
                                        <>
                                            <p className="text-center" style={{ letterSpacing: "2px" }}>{data.desc}.
                                                <a href={data.Link}>Wikipedia</a></p>
                                            <hr className="my-1" />
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}><b>Address:</b>{data.Address}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}><b>Phone:</b>{data.Phone}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}><b>Architect:</b>{data.Architect}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}><b>Built:</b>{data.Built}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}> <b>Architectural:</b>{data.Architectural}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}><b> StateParty:</b>{data.StateParty}</p>
                                            <p style={{ letterSpacing: "0px", fontSize: "12px" }}> <b> HeightOrArea:</b>{data.HeightOrArea}</p>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>

                    <div className="col-md-5 col-sm-12 border">
                        <h6 className="text-center text-success my-3" style={{ fontSize: "12px" }}> {placeName}(images) </h6>
                        <hr />
                        {
                            city.map((data) => {
                                if (data.cityName == placeName) {
                                    return (
                                        <>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ height: "400px" }}
                                                        src={data.img}
                                                        alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                       
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ height: "400px" }}
                                                        src={data.img2}
                                                        alt="Second slide"
                                                    />

                                                    <Carousel.Caption>
                                                      
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ height: "400px" }}
                                                        src={data.img3}
                                                        alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                      
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        style={{ height: "400px" }}
                                                        src={data.img4}
                                                        alt="Third slide"
                                                    />
                                                    <Carousel.Caption>
                                                     
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default AboutPlace;
