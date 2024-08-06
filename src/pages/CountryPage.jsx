import { useEffect, useLayoutEffect, useState } from "react"
import { useParams } from "react-router"
import "../style/loader.css"


export default function CountryPage() {
    const [countryInfo, setCountryInfo] = useState(null)
    const {countryName} = useParams();
    

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(res => {
            let {symbol, name} = Object.values(res[0].currencies)[0]
            let response = {...res[0], currencies:{symbol, name}}
            setCountryInfo(response)
        })
        .catch(err => setCountryInfo({status: 404, info:err}))
    }, [])
    console.log(countryName, countryInfo)

    return (
        !countryInfo? <div className="container d-flex justify-content-center  mt-5"><div className="row mt-5"><div className="loader col-6"/></div></div>
        :
        countryInfo?.status=== 404? <div className=" mt-5"><h2>Error 404</h2></div>
        :
        <div className="container mt-5 pt-2">
        <div className="row hero d-flex justify-content-center mt-5 w-100">
            <div className="d-block w-auto">
                <h1 class="display-5 fw-bold text-primary lh-1 mb-5 ">{`${countryInfo.name.common} (${countryInfo.name.official})` }</h1>
            </div>
        </div>
        <div className="row body d-flex flex-direction-column gap-4">
            <div className="language">
                <h2 className="text-primary">Country's national language</h2>
                <h3 className="text-secondary">{[...Object.values(countryInfo.languages)].join(", ")}</h3>
            </div>
            <div className="capital">
                <h2 className="text-primary">Country's capital city</h2>
                <h3 className="text-secondary">{countryInfo.capital}</h3>
            </div>
            <div className="currencies">
                <h2 className="text-primary">Currencies</h2>
                <div className="d-flex align-items-center gap-2"><h3 className="text-primary">{countryInfo.currencies.symbol}</h3><h3 className="text-secondary">{countryInfo.currencies?.name}</h3></div>
            </div>
            <div className="flags">
                <h2 className="text-primary">Flags</h2>
                <div className="w-100 d-flex justify-content-center">
                    <img src={countryInfo.flags?.png} alt="#" className="w-50% h-auto"/>
                </div>
            </div>
            <div className="population">
                <h2 className="text-primary">Population</h2>
                <h3 className="text-secondary">{countryInfo.population}</h3>
            </div>
        </div>

        </div>

    )
}