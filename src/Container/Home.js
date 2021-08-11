import victoria from '../Image/Kolkatta/victoria.png'
import indiaGate from '../Image/Delhi/india-gate.jpeg'
import mahal from '../Image/Mumbai/mahal.jpg'
// import { NavLink } from 'react-router-dom'
import hawrahBridge from '../Image/Kolkatta/hawrah-bridge.jpg'
import Cart from './Cart'
import {File} from '../File.js';
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <div className='container my-5 text-center' style={{ zIndex: "-1" }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: "400px" }}
                            src={victoria}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Victiria palace</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: "400px" }}
                            src={indiaGate}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3> India Gate</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: "400px" }}
                            src={mahal}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Maharaja fort</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: "400px" }}
                            src={hawrahBridge}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Hawrah Bridge</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container border mb-5 text-center"><h1>Places to Visit India</h1></div>
            <Cart file={File} />
            <Footer />

        </>
    )
}
export default Home;