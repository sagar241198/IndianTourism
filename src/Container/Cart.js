
import { NavLink } from 'react-router-dom';
const Cart = (props) => {
    console.log(props.file);
    const handleplace = (state) => {
        localStorage.setItem("state", state);
    }
    return (
        <>
            <div className="container my-4">
                <h5 className="border-bottom mb-4">Places</h5>
                <div className="row">
                    {
                        props.file.map(place => {
                            console.log(place.img);
                            return (
                                <>
                                    <div className="col-md-3  mb-2">
                                        <div className="card p-3 " style={{ width: "15rem", background: "grey" }}>
                                            <img src={place.img} style={{height:"200px"}} className="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 className="card-title">{place.name}</h5>
                                                <NavLink to="/places" onClick={() => { handleplace(place.state) }} key={place.id} className="btn btn-primary">View More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
           
        </>
    )
}
export default Cart;