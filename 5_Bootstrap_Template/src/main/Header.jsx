import React from 'react'

const Header = () => {
  return (
    <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo"> Spooky </a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">Graveyard</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">Track Record</a>
          </li>
          <li class="nav__item">
            <a href="#trick" class="nav__link">Services</a>
          </li>
          <li class="nav__item">
            <a href="#new" class="nav__link">Know More</a>
          </li>
          <a href="#" class="button button--ghost">Support</a>
        </ul>
        <div class="nav__close" id="nav-close">
          <i class='bx bx-x'></i>
        </div>
        <img src="https://assets.codepen.io/7773162/nav-img.png" alt="" class="nav__img" />
      </div>
      <div class="nav__toggle" id="nav-toggle">
        <i class='bx bx-grid-alt'></i>
      </div>
    </nav>
  </header>
  )
}

export default Header