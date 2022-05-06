import { InPage } from "./style";
import { useState } from "react";

export default function In() {

    const [newEntry, setNewEntry] = useState({
        value: '',
        description: ''
    });

    return (
        <InPage>
            <h1>Nova entrada</h1>
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
            <button>Salvar entrada</button>
        </InPage>
    );
}