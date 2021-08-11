import { NavLink } from 'react-router-dom';
import indianFlag from '../Image/indian-flag.jpg'
import indianlogo from '../india3.jpg'

const Navbar = () => {
    return (
        <>
            <div className="fixed w-100 mb-3" >
                <nav className="navbar navbar-expand-md shadow   navbar-dark bg-dark">
                    <div class="container">
                        <img src={indianFlag} className="ml-3 mr-1" style={{ width: "30px", height: "30px", borderRadius: "20px" }} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/"><i class="fas fa-home"></i> Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/AboutIndia"><i class="fas fa-ban"></i> About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="#"><i class="fab fa-servicestack"></i> Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#"> <i class="far fa-address-book"></i> Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;