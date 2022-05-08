import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import UserContext from "../../contexts/UserContext";
import { HomePage, Header, NoData, StrongValue, Registres, NewRegistry, RegistriesSection, Balance, BalanceP } from "./style";

export default function Home() {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [username, setUsername] = useState("Fulano");
    const [registries, setRegistries] = useState([]);
    const [sumRegistries, setSumRegistries] = useState(0);

    function logout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    function getRegistries() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get("http://localhost:5000/registry", config)
            .then((res) => {
                let sum = 0;
                setUsername(res.data.username);
                setRegistries(res.data.registries)
                res.data.registries.forEach(e => {
                    if (e.positive) {
                        sum += parseFloat(e.value);
                    } else {
                        sum -= parseFloat(e.value);
                    }
                })
                setSumRegistries(sum);
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
        getRegistries();
    }, [])

    const noData =
        <NoData>Não há registros de entrada ou saída</NoData>

    const formatedSum = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumRegistries);

    const balance =
        <>
            <h2>SALDO</h2>
            <BalanceP positive={sumRegistries}>{formatedSum}</BalanceP>
        </>


    function formatNumbers(e) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e);
    }

    return (
        <HomePage>
            <Header>
                <p>Olá, {username}</p>
                <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
            </Header>

            <Registres>
                {registries?.map(e => {
                    return (
                        <RegistriesSection>
                            <div>
                                <small>{e.date}</small>
                                <p>{e.description}</p>
                            </div>
                            <StrongValue
                                positive={e.positive}>{formatNumbers(e.value)}</StrongValue>
                        </RegistriesSection>
                    );
                })}
                <Balance>
                    {registries.length === 0 ? noData : balance}
                </Balance>
            </Registres>

            <NewRegistry>
                <Link to={"/input"}>
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                    </div>
                </Link>
                <Link to={"/output"}>
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                    </div>
                </Link>
            </NewRegistry>

        </HomePage>
    );
}