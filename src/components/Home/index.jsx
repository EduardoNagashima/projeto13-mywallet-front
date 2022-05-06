import { HomePage, Header, Registers, NewRegistry } from "./style";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function logout() {
        //FIXME aqui fazer o logou!
        navigate("/");
    }

    return (
        <HomePage>
            <Header>
                <p>
                    {/* FIXME, COLOCAR O NOME DA PESSOA AQUI! */}
                    Olá, FULANO
                </p>

                <ion-icon name="log-out-outline" onClick={logout}></ion-icon>

            </Header>

            <Registers>

            </Registers>

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