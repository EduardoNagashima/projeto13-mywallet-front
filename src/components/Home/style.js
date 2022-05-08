import styled from "styled-components";

export const HomePage = styled.main`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8A20BB;
    width: 375px;
    height: 667px;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px;
    
    p{
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }

    ion-icon{
        font-size: 30px;
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const Registres = styled.div`
    width: 326px;
    height: 446px;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    overflow: scroll;
    position: relative;
`
export const Balance = styled.div`
    display: flex;
    margin-top: 10px;
    position: sticky;
    bottom: 0px;
    justify-content: space-between;
    background-color: #fff;
    border: #fff 2px solid;
    border-radius: 20px;
    h2{
        font-weight: 700;
        font-size: 17px;
        color: #000000;
    }
`
export const BalanceP = styled.p`
        font-weight: 400;
        font-size: 17px;
        color: ${props=> props.positive > 0 ? "#03AC00" : "#C70000"};
`

export const RegistriesSection = styled.section`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        small {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #C6C6C6;
            margin-right: 10px;
        }

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            word-break: break-all;
        }
       
    }
`

export const NoData = styled.h1`
    text-align: center;
    margin-top: 200px;
    font-weight: 400;
    font-size: 20px;
    color: #868686;
`

export const StrongValue = styled.strong`
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    color: ${props=> props.positive ? "#03AC00" : "#C70000"};
`

export const NewRegistry = styled.div`
    margin-top: 13px;
    margin-bottom: 16px;
    display: flex;
    gap: 15px;
    align-items: center;

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        position: absolute;
        bottom: 9px;
        left: 12px;
    }

    div {
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        position: relative;

        ion-icon {
            position: absolute;
            font-size: 25px;
            color: #fff;
            top: 9px;
            left: 10px;
        }
    }
`