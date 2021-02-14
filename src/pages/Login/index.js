import React, { useState } from 'react';
import { 
    Container, 
    BoxLogin, 
    BoxImage, 
    FormLogin, 
    LogoBox,
    Labels
} from './styles';
import api from '../../services/api';
import ImagemSlider from '../../components/slider';
import { SliderData } from '../../components/slider/sliderdata';
import { Link } from 'react-router-dom';
import { SiSitepoint } from 'react-icons/si';
import { useHistory } from 'react-router-dom';

function Login(){
    const history = useHistory()
    const [login, setLogin] = useState({ email: '', password: '' });

    async function handleOnSubmit(e){
        e.preventDefault();
        const response = await api.post('/sessions', login);
        
        if(response.status === 200){
            const { user, token } = response.data;
            if(token){
                localStorage.setItem('token', token);
                history.push('/main');
            }
        }
        setLogin({ email: '', password: '' });
    }

    function handleOnChange(e){
        if(e.target.name === 'email'){
            setLogin(prevState => ({
                ...prevState,
                email: e.target.value
            }))
        }else{
            setLogin(prevState => ({
                ...prevState,
                password: e.target.value
            }))
        }
    }

    return(
        <Container>
            <BoxLogin>
                <LogoBox>
                    <SiSitepoint color='#5923b2' size={35}/>
                    <h1>Simply Url</h1>
                </LogoBox>

                <FormLogin onSubmit={(e) => handleOnSubmit(e)}>
                    <Labels htmlFor="">Seu email:</Labels>
                    <input 
                        placeholder='seuemail@email.com' 
                        name="email"  
                        onChange={(e) => handleOnChange(e)}
                        required
                        value={login.email}
                    />

                    <Labels htmlFor="">Sua senha:</Labels>
                    <input 
                        placeholder='Sua senha...' 
                        type='password' 
                        name="password" 
                        onChange={(e) => handleOnChange(e)}
                        required
                        value={login.password}
                    />

                    <Link to="/create">Não tem uma conta?</Link>
                    <button type='submit'>Log in</button>
                </FormLogin>

            </BoxLogin>

            <BoxImage>
                <ImagemSlider slides={SliderData}/>

            </BoxImage>

        </Container>
    )
}

export default Login;