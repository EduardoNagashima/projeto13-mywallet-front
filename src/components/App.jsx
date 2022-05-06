import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../style/reset.css";
import "./../style/style.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}