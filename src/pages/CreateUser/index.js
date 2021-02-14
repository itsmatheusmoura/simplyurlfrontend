import React, { useState } from 'react';
import { 
    Container, 
    BoxLogin, 
    BoxImage, 
    FormLogin, 
    LogoBox,
    Labels
} from './styles';
import ImagemSlider from '../../components/slider';
import { SliderData } from '../../components/slider/sliderdata';
import { SiSitepoint } from 'react-icons/si';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function CreateUser(){

    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const history = useHistory();

    async function handleOnSubmit(e){
        e.preventDefault();
        const response = await api.post('/users', user);
        if(response.status === 200){
            alert('Cadastro feito com sucesso');
            history.push('/');
        }
        setUser({ name: '', email: '', password: '' });
    }

    function handleOnChange(e){
        if(e.target.name === 'name'){
            setUser(prevState => ({
                ...prevState,
                name: e.target.value
            }))
        }else if(e.target.name === 'email'){
            setUser(prevState => ({
                ...prevState,
                email: e.target.value
            }))
        }else{
            setUser(prevState => ({
                ...prevState,
                password: e.target.value
            }))
        }
    }

    return(
        <Container>
            <BoxLogin>
                <LogoBox>
                    <div>
                        <Link to='/'><SiSitepoint color='#5923b2' size={35}/></Link>
                        <h2>Simply Url</h2>
                    </div>
                    <Link to='/'><BsFillBackspaceFill color='#5923b2' size={25}/></Link>
                </LogoBox>

                <FormLogin onSubmit={(e) => handleOnSubmit(e)}>
                    <h2>Novo por aqui ? </h2>
                    <Labels htmlFor="">Seu nome:</Labels>
                    <input 
                        name='name' 
                        placeholder='Seu nome...' 
                        required 
                        onChange={(e) => handleOnChange(e)} 
                        value={user.name}
                    />

                    <Labels htmlFor="">Seu email:</Labels>
                    <input  
                        name='email' 
                        type='email' 
                        placeholder='seuemail@email.com' 
                        required 
                        onChange={(e) => handleOnChange(e)} value={user.email}
                        value={user.email}
                    />

                    <Labels htmlFor="">Sua senha:</Labels>
                    <input 
                        name='password' 
                        placeholder='Sua senha...' 
                        type='password' 
                        required 
                        onChange={(e) => handleOnChange(e)}
                        value={user.password}
                    />

                    <button type='submit'>Cadastrar</button>
                </FormLogin>

            </BoxLogin>

            <BoxImage>
                <ImagemSlider slides={SliderData}/>

            </BoxImage>

        </Container>
    )
}

export default CreateUser;