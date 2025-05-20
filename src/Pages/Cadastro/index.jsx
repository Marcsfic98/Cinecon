import React from 'react'
import {ContainerCadastro ,Input} from './style'
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
const Cadastro = () => {

  return (
   <ContainerCadastro>
    <br/>
     <Logo/>
     <br/>
     <p>Crie sua conta !</p>
     <br/>
     <Input type='text' placeholder='E-mail'/>
     <Input type='password' placeholder='Senha'/>
     <Input type='password' placeholder='Confirmar Senha'/>
     <br/>
     <Button title='Cadastrar'/>
     <br/>
     <br/>
     <p>Não possui conta ?  <a href='#'>Criar Conta !</a></p>
     <br/>
   </ContainerCadastro>
  );
}

export {Cadastro}