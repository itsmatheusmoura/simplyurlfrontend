import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
export const BoxImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 70%;
    background-color: #5923b2;

    @media(max-width: 800px){
        display: none;
    }
`;

export const BoxLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    background-color: #ffffff;
    height: 100vh;
    margin: 0 75px;

    @media(max-width: 800px){
        width: 100%;
    }
`;


export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    h1{
        font-size: 26px;
        color: #3a434c;
    }

    svg{
        fill: #5923b2;
        margin-right: 15px;
    }
`;


export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;

    input{
        padding: 10px;
        width: 100%;
        border-radius: 8px;
        border: none;

        &:focus{
            border: 2px solid #5923b2;
        }
    }

    a{
        margin: 10px 0;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            color: #5923b2;
            transition: 1s;
        }
    }

    button{
        width: 100%;
        padding: 10px 25px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #eee;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 1px;

        &:hover{
            background-color: #5923b2;
            transition: 800ms;
            color: #FFFFFF;
            font-weight: bold;
        }
    }
`;


export const Labels = styled.label`
    margin: 10px 0;
`;