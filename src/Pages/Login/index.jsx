import React from 'react'
import {ContainerLogin ,Input} from './style'
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
const Login = () => {

  return (
   <ContainerLogin>
    <br/>
     <Logo/>
     <br/>
     <p>Ja possui conta ? Faça o Login !</p>
     <br/>
     <Input type='text' placeholder='E-mail'/>
     <Input type='password' placeholder='Senha'/>
     <br/>
     <Button title='Entrar'/>
     <br/>
     <br/>
     <p>Não possui conta ?  <a href='#'>Criar Conta !</a></p>
   </ContainerLogin>
  );
}

export {Login}