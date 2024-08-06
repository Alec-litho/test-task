import { Link } from "react-router-dom";



export default function Country({countryInfo}) {

    return (
        <div className="country pb-5">
            <div className="card" style={{"width": "30rem"}}>
                <img src={countryInfo.flags.png} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{countryInfo.name.common}</h5>
                        <p className="card-text">Some quick information about this country which name is {countryInfo.name.common} because i couldn't find any long description in api i added it myself</p>
                        <Link to={`country/${countryInfo.name.official}`} className="btn btn-primary align-self-center" style={{"width": "80%"}}>see more</Link>
                    </div>
            </div>
        </div>
    )
}