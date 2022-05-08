import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { OutPage } from "./style";
import axios from "axios";

import UserContext from "../../contexts/UserContext";

export default function Out() {

    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [newEntry, setNewEntry] = useState({
        value: '',
        description: ''
    });

    function submitEntry(e) {
        e.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post("http://localhost:5000/out", {
            value: newEntry.value,
            description: newEntry.description
        }, config)
            .then(() => {
                navigate("/home");
            })
            .catch(e => console.error(e));
    }

    return (
        <OutPage>
            <h1>Nova saída</h1>
            <input
                required
                type="number"
                placeholder="Valor"
                onChange={e => setNewEntry({ ...newEntry, value: e.target.value })}
            />
            <input
                required
                type="text"
                placeholder="Descrição"
                onChange={e => setNewEntry({ ...newEntry, description: e.target.value })}
            />
            <button type="submit" onClick={submitEntry}>Salvar saída</button>
        </OutPage>
    );
}