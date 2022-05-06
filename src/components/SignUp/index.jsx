import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { SignUpPage, SignUpTittle, Container, SignUpForm } from "./style";
export default function SignUp() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function createAccount(e) {
        const { name, email, password, confirmPassword } = userInfo;
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas devem ser as mesmas');
            return;
        }

        axios.post("http://localhost:5000/signup", { name, email, password })
            .then(() => {
                navigate("/");
            })
            .catch(e => {
                console.log(e.response.data);
                alert(e.response.data);
            })

    }

    return (
        <SignUpPage>
            <Container>
                <SignUpTittle>MyWallet</SignUpTittle>
                <SignUpForm onSubmit={createAccount}>
                    <input
                        type="text"
                        required
                        placeholder="Nome"
                        value={userInfo.name}
                        onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                    />
                    <input
                        type="email"
                        required
                        placeholder="E-mail"
                        value={userInfo.email}
                        onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Senha"
                        value={userInfo.password}
                        onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Confirme a senha"
                        value={userInfo.confirmPassword}
                        onChange={e => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
                    />
                    <button> Cadastrar </button>
                </SignUpForm>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </Container>
        </SignUpPage >
    )
}