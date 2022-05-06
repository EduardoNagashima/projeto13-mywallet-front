import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { SignInPage, SignInTittle, Container, SignInForm } from "./style";

export default function SignIn() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/signin", userInfo)
            .then(() => {
                navigate('/home');
            })
            .catch(e => {
                console.log(e);
                alert(e.response.data);
            })
    }

    return (
        <SignInPage>
            <Container>
                <SignInTittle>MyWallet</SignInTittle>
                <SignInForm onSubmit={login}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={userInfo.senha}
                        onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} />
                    <button type="submit"> Entrar </button>
                </SignInForm>
                <Link style={{ textDecoration: 'none' }} to={'/SignUp'}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </Container>
        </SignInPage>
    );
}