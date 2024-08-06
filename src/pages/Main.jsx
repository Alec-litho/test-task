import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import "../style/loader.css"
import Country from "../components/Country";

export default function Main() {
  let [countries, setCountries] = useState(null);
  let countryLength = 10;

  useEffect(() => {
    fetchCountriesData()
  }, [])

  function fetchCountriesData() {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(res => { countries === null ? setCountries(res.slice(0, countryLength)) : setCountries(prev => [...prev, ...res.slice(prev.length, prev.length + 10)]) })
      .catch(err => setCountries({ status: 404, desc: err }))
  }

  return (
    <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 mt-5 align-items-center justify-content-center">
      {!countries? <div className="loader"></div>
        :
        countries.status === 404 ? <><h2>Error 404</h2></>
          :
          
            <InfiniteScroll
              dataLength={countries.length}
              next={fetchCountriesData}
              hasMore={true}
              loader={<div className="loader"></div>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>you finished scrolling</b>
                </p>
              }
            >
              {countries.map((country, indx) => {
                return <Country countryInfo={country} key={(Math.random() * 1000) * indx}></Country>
              })}
            </InfiniteScroll>


      }
    </div>
  )
}