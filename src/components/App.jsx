import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../style/reset.css";
import "./../style/style.css";
import SignIn from "./SignIn";
import Home from "./Home";
import In from "./In";
import Out from "./Out"
import SignUp from "./SignUp";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/in" element={<In />} />
                <Route path="/out" element={<Out />} />
            </Routes>
        </BrowserRouter>
    );
}