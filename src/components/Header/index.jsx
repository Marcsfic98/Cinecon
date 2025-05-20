import React from 'react'
import {ContainerHeader , Center} from './style'
import { Logo } from '../Logo'
import { Avatar } from '../Avatar'

const Header = () => {
  return (
    <ContainerHeader>
        <Center>
        <Logo/>
        <Avatar/>
        </Center>
    </ContainerHeader>
  )
}

export {Header}
