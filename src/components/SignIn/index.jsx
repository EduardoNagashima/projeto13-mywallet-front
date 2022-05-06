import { Link } from "react-router-dom";
import { useState } from "react";
import { SignInPage, SignInTittle, Container, SignInForm } from "./style";

export default function SignIn() {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        e.preventDefault();
        const { email, password } = userInfo;
        console.log(email, password);
    }


    return (
        <SignInPage>
            <Container>
                <SignInTittle>MyWallet</SignInTittle>
                <SignInForm onSubmit={login}>
                    <input type="email" placeholder="E-mail" value={userInfo.email} onChange={e => setUserInfo({ ...userInfo, email: e.value })} />
                    <input type="password" placeholder="Senha" value={userInfo.senha} onChange={e => setUserInfo({ ...userInfo, password: e.value })} />
                    <button type="submit"> Entrar </button>
                </SignInForm>
                <Link style={{ textDecoration: 'none' }} to={'/SignUp'}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </Container>
        </SignInPage>
    );
}