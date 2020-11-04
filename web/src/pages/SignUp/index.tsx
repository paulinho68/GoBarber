import React from 'react';
import logoImg from '../../assets/logo.svg';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data);
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input type="text" name="name" icon={FiUser} placeholder="Nome" />
                    <Input type="text" name="email" icon={FiMail} placeholder="E-mail" />
                    <Input type="password" name="password" icon={FiLock} placeholder="Senha" />
                    <Button type="submit">Cadastrar</Button>
                </Form >
                <a href="login">
                    <FiArrowLeft />
                Voltar para Logon
            </a>
            </Content>
        </Container>
    )
};

export default SignUp;