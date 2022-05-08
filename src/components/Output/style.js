import styled from "styled-components";

export const OutPage = styled.main`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8A20BB;
    width: 375px;
    height: 667px;
    padding: 25px;
    h1{
        align-self: flex-start;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: #000000;
        margin-bottom: 13px;
        padding-left: 15px;
        ::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #000000;
        }
        ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
    }
    button{
        width: 326px;
        height: 46px;
        border: none;
        background: #A328D6;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
    }
`