import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignInPage, SignInTittle, Container, SignInForm } from "./style";

export default function SignIn({ getToken }) {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            navigate("/home");
        }
    }, [])

    function login(e) {
        e.preventDefault();
        axios.post("https://projeto13-mywallet-fullstack.herokuapp.com/signin", userInfo)
            .then((res) => {
                const token = res.data;
                localStorage.setItem("token", token);
                getToken(token);
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
                        required
                        type="email"
                        placeholder="E-mail"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
                    <input
                        required
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