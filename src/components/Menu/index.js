import React from 'react'
import Logo from '../../assets/logo-aluraflix.png'
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </a>

      <a href="#" className="ButtonLink">Novo Vídeo</a>
    </nav>

  )

}

export default Menu;

