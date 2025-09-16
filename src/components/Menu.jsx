import { NavLink } from 'react-router-dom';
import '../App.css'

export default function Menu() {
  return (
    <>
      <nav className="menu">
        <NavLink className={({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item'} to='/'>Главная</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item'} to='/favourites'>Избранное</NavLink>
      </nav>
    </>
  )
}