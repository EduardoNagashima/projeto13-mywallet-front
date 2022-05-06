import { OutPage } from "./style";
import { useState } from "react";

export default function Out() {

    const [newEntry, setNewEntry] = useState({
        value: '',
        description: ''
    });

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
            <button>Salvar saída</button>
        </OutPage>
    );
}