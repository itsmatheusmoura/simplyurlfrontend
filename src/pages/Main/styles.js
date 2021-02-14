import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    @media(max-width: 800px){
        flex-direction: column;
    }
`;

export const MyUrls = styled.div`
    display: flex;
    width: 50%;
    background-color: #5923b2;
    flex-direction: column;

    h2{
        margin-top: 10px;
        text-align: center;
        font-size: 25px;
        letter-spacing: 1px;
        font-weight: bold;
    }

    table{
        margin-top: 15px;
    }

    @media(max-width: 800px){
        width: 100%;
    }
`;

export const NewUrls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    background-color: #F5F5F5;

    @media(max-width: 800px){
        width: 100%;
        min-height: 300px;
    }
`;

export const Modal = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #B7ACA9;
    opacity: 0.9;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 30px;
        font-weight: bold;
        text-transform: lowercase;
    }

    svg{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        fill: #5923b2;

        &:hover{
            transform: scale(1.5);
            transition: 1s;
        }
    }
`;


export const UrlForm = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 350px;

    input{
        padding: 10px 15px;
        border-radius: 8px;
        border: 1px solid #B7ACA9;
        letter-spacing: 1px;

        &:focus{
            border: 2px solid #5923b2;
        }
    }

    button{
        margin-top: 15px;
        padding: 10px 15px;
        border-radius: 8px;
        border: 1px solid #B7ACA9;
        cursor: pointer;
        font-weight: bold;

        &:hover{
            background-color: #5923b2;
            transition: 800ms;
            color: #FFFFFF;
            font-weight: bold;
        }
    }
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #eee;
    width: 50%;

    
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 800px){
        width: 100%;
    }
`;

export const HeaderDate = styled.div`
    margin-right: 15px;
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    h2{
        font-size: 15px;
        margin: 0 10px;
    }
`;

export const LinkHome = styled(Link)`
    text-decoration: none;
    font-size: 15px;

    &:hover{
        color: #5923b2;
        transition: 800ms;
        font-weight: bold;
    }
`;
