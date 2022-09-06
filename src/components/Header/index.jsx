import React from 'react'
import './Header.css'
import propTypes from 'prop-types'

// eslint-disable-next-line react/display-name
export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ' '}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo Netflix"
          />
        </a>
        <div className="header--nav">
          <a href="">Originais</a>
          <a href="">Recomendados</a>
          <a href="">Em Alta</a>
          <a href="">Ação</a>
          <a href="">Terror</a>
          <a href="">Romance</a>
          <a href="">Documentario</a>
        </div>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="usuário"
          />
        </a>
      </div>
    </header>
  )
  Header.propTypes = {
    black: propTypes.object
  }.isRequired
}
