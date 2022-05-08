import styled from "styled-components";

export const SignUpPage = styled.main`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8A20BB;
    width: 375px;
    height: 667px;
    p{
        text-decoration-line: none;
        color: #FFF;
        font-weight: 700;
        font-size: 15px;
        
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SignUpTittle = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    color: #FFF;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 24px;
`

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 326px;
        height: 58px;
        font-weight: 400;
        font-size: 20px;
        color: #000;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin-bottom: 13px;
        padding-left: 15px;
        ::placeholder {
            color: #000;
            font-size: 20px;
        }
    }
    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 36px;
    }
`