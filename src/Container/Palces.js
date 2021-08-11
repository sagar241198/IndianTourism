import { File } from '../File';
import mahal from '../Image/Mumbai/mahal.jpg'
import { NavLink } from 'react-router-dom';

import { city } from '../City';
import { useState } from 'react';

function Places() {
    const [State, setState] = useState("All");
    // console.log(city);


    function hadnle(name) {
        localStorage.setItem('placeName', name);
    }

    let stateName = localStorage.getItem('state');
    console.log(stateName)
    return (
        <>
            <div className="container">
                <div class="jumbotron " style={{ marginTop: "100px" }}>
                    <h3 class="display-4">{stateName}</h3>
                    {
                        File.map((place) => {
                            if (place.state == stateName) {
                                return (
                                    <p>{place.description}</p>
                                )
                            }
                        })
                    }
                    <p class="lead"></p>
                    <hr class="my-4" />
                    {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                </div>
            </div>
            <div className=" container border serchingBox my-5">

                <h1 className="text-center mb-5">Places to Visit in {stateName}</h1>
                <div style={{ width: "700px", margin: "auto" }}>
                    <form>
                        <select id="city" className="ml-1 mr-5 "
                            onChange={(e) => { setState(e.target.value) }}
                            style={{ width: "500px", height: "39px" }}>
                            <option value="All">All</option>
                            {city.map((element) => {
                                if (element.name == stateName) {
                                    return (
                                        <option
                                            name={element.cityName}
                                            value={element.cityName}
                                        >
                                            {element.cityName}
                                        </option>
                                    )
                                }
                            })}
                        </select>
                        {/* <button
                            className="btn btn-outline-success"
                            style={{ width: "100px" }}
                            onClick={HandleState}
                        > search {State} </button> */}
                    </form>
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    {
                        city.map((city) => {
                            if (city.name == stateName && State == "All") {
                                return (
                                    <div className="col-md-3  mb-2">
                                        <div className="card p-3 " style={{ width: "15rem", background: "#ffff" }}>
                                            <img src={city.img} style={{ height: "200px" }} className="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 className="card-title">{city.cityName}</h5>
                                                <NavLink to="/aboutplace" onClick={() => { hadnle(city.cityName) }} className="btn btn-secondary">View</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } if (city.name == stateName && city.cityName == State) {
                                return (
                                    <div className="col-md-3  mb-2">
                                        <div className="card p-3 " style={{ width: "15rem", background: "#ffff" }}>
                                            <img src={city.img} style={{ height: "200px" }} className="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 className="card-title">{city.cityName}</h5>
                                                <NavLink to="/aboutplace" onClick={() => { hadnle(city.cityName) }} className="btn btn-secondary">View</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="footer_in_place">
                <p>All Rights are Reserved !</p>
            </div>
        </>
    )
}
export default Places;