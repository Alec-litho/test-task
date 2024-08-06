import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";
import Main from "./pages/Main";
import { Route, Router, Routes } from "react-router-dom";



export default function App() {


    return (
        <div>
            <Navbar></Navbar>
            <div className="body">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/country/:countryName" element={<CountryPage />} />
            </Routes>
            </div>

        </div>
    )
}