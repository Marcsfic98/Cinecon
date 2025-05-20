import React from 'react'
import {ContainerLogo} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
const Logo = () => {
  return (
    <ContainerLogo>
        <i><FontAwesomeIcon icon={faFilm} /></i>
        <h1>CineCon</h1>
    </ContainerLogo>
  )
}

export {Logo}