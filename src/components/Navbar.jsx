import { Link } from "react-router-dom";



export default function Navbar() {

    return (
        <nav class="navbar navbar-light bg-body-tertiary d-flex justify-content-center w-100 fixed-top">
            <div class="navbar-nav " >
                <Link to="/" className="nav-link font-weight-500" ><span style={{"font-weight":"500","font-size":"22px"}}>Home</span></Link>
            </div>
        </nav>
    )
}



