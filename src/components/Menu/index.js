import React from 'react'
import Logo from '../../assets/logo-aluraflix.png'
import './Menu.css'
import ButtonLink from '../components/ButtonLink'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </a>
      <Button href="/" as="a" className="ButtonLink">Novo Vídeo</Button>
    </nav>

  )

}

export default Menu;

