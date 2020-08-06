import React from 'react'
import Logo from '../../assets/logo-aluraflix.png'
import './Menu.css'
import ButtonLink from '../components/ButtonLink'
import Button from '../Button'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </Link>
      <Button to="/cadastro/video" as={Link} className={ButtonLink}>Novo Vídeo</Button>
    </nav>

  )

}

export default Menu;

