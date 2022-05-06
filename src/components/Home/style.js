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

export const Registers = styled.div`
    width: 326px;
    height: 446px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
`

export const NewRegistry = styled.div`
    margin-top: 13px;
    margin-bottom: 16px;
    display: flex;
    gap: 15px;
    align-items: center;
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

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        position: absolute;
        bottom: 9px;
        left: 12px;
    }
`