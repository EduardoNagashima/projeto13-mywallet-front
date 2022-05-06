import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <section>
            <h1>MyWallet</h1>
            <input placeholder="Nome" type="email" />
            <input placeholder="E-mail" type="email" />
            <input placeholder="Senha" type="password" />
            <input placeholder="Confirme a senha" type="password" />
            <button> Cadastrar </button>

            <Link to={'/'}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </section>
    )
}