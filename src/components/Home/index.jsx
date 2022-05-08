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

    if (!token) {
        navigate("/");
    }

    function logout() {
        //FIXME aqui fazer o logout!
        localStorage.removeItem("token")
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
                setUsername(res.data.username);
                setRegistries(res.data.registries)
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        getRegistries();
    }, [])

    const noData =
        <NoData>Não há registros de entrada ou saída</NoData>

    const balance =
        <Balance>
            <h2>SALDO</h2>
            <BalanceP positive={sumRegistries}>{sumRegistries}</BalanceP>
        </Balance>

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
                                positive={e.positive}>{e.value}</StrongValue>
                        </RegistriesSection>
                    );
                })}
                {balance}
                {registries.length === 0 && noData}
            </Registres>

            <NewRegistry>
                <Link to={"/in"}>
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                    </div>
                </Link>
                <Link to={"/out"}>
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                    </div>
                </Link>
            </NewRegistry>

        </HomePage>
    );
}