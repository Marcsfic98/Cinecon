import React from 'react'
import { Categorias } from '../../components/Categorias'
import { Header } from '../../components/Header'
import { ContainerMain ,Row } from './style'
import { Conteudo } from '../../components/Conteudo'

const Main = () => {


    
  return (

    <ContainerMain>
        <Header/>
        <Row>
            <Categorias/>
            <Conteudo/>
        </Row>
      
    </ContainerMain>
    
  )
}

export {Main}
