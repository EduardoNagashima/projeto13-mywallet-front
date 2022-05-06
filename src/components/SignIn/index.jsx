import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <section>
            <h1>MyWallet</h1>
            <input type="email" />
            <input type="password" />
            <button type="button"> Entrar </button>
            <Link to={'/SignUp'}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </section>
    );
}