import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "../style/reset.css";
import "../style/style.css";
import SignIn from "./SignIn";
import Home from "./Home";
import In from "./Input";
import Out from "./Output"
import SignUp from "./SignUp";
import UserContext from "../contexts/UserContext";

export const URL = "https://projeto13-mywallet-fullstack.herokuapp.com/"

export default function App() {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token }}>
                <Routes>
                    <Route path="/" element={<SignIn
                        getToken={token => setToken(token)}
                    />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/input" element={<In />} />
                    <Route path="/output" element={<Out />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}