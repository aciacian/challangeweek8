import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Landing from "../pages/landing";
import Search2 from "../pages/search2";


const Routeapp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/cars" element={<Search2/>} />
            </Routes>
        </BrowserRouter>
    )

}

export default Routeapp;