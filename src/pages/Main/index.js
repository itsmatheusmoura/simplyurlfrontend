import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Table }from 'react-bootstrap';
import {
    Container,
    MyUrls,
    NewUrls,
    UrlForm,
    Header,
    HeaderDate,
    UserData,
    LinkHome,
    Modal
} from './styles';

import api from '../../services/api';
import { isAuthenticated } from '../../auth';
import config from '../../configs/config';

function Main(){
    const [visible, setVisible] = useState(false);
    const [urltype, setUrlType] = useState('');
    const [shrinkUrl, setShrinkUrl] = useState('');
    const [myUrls, setMyUrls] = useState([]);

    useEffect(() => {
        searchMyUrls();
    }, [])

    useEffect(() => {
        searchMyUrls();
    }, [shrinkUrl]);

    function handleOnChange(e){
        setUrlType(e.target.value);
    };

    const token = isAuthenticated();
    async function handleOnSubmit(e){
        e.preventDefault();
        const response = await api.post('/shrink', {original_url: urltype}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const { shrink_url } = response.data;
        setShrinkUrl(shrink_url );
        setUrlType('');
    };

    async function searchMyUrls(){
        const response = await api.get('/urls/list', {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });

        setMyUrls(response.data);
    }

    return (
        <Container>
            <NewUrls>
                <Header>
                    <div>
                        <UserData>
                            <h2>Bem vindo</h2>
                            <LinkHome  onClick={() => {localStorage.removeItem('token')}} to=''>- Go Home (Sair)</LinkHome>
                        </UserData>
                        <HeaderDate>
                            {new Date().toLocaleDateString()}
                        </HeaderDate>
                    </div>
                </Header>
                <UrlForm onSubmit={(e) => handleOnSubmit(e)}>
                    {
                        visible ? 
                            <Modal>
                                <AiOutlineClose 
                                    size={25} 
                                    onClick={() => setVisible(!visible)}
                                />
                                <p>{ config.path + shrinkUrl }</p>
                            </Modal> 
                        : null
                    }    
                    <input 
                        type='url' 
                        placeholder='Digite uma url... ' 
                        required
                        onChange={(e) => handleOnChange(e)}
                        value={urltype}
                    />
                    <button type='submit' onClick={() => setVisible(!visible)}>Gerar Shrink Url</button>
                </UrlForm>
            </NewUrls>
            <MyUrls>
                <h2>Minhas Url's</h2>
                <Table style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', fontSize: '14px',border: 'none' }} striped bordered hover variant="light" size="sm" responsive>
                    <thead>
                        <tr>
                            <th>Original URL</th>
                            <th>Shrink URL</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myUrls.map((url) => (
                                <tr key={url.id}>
                                    <td>{url.original_url}</td>
                                    <td>{config.path + url.shrink_url}</td>
                                    <td>{new Date(url.createdAt).toLocaleString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </MyUrls>
        </Container>
    );
};

export default Main;