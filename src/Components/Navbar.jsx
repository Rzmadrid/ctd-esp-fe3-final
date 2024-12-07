//import React from 'react'

import { Link } from "react-router-dom"
import { useUserStates } from "../Context/Context";


const Navbar = () => {
  const { dispatch, state } = useUserStates();

  const toggleTheme = ()=>{   
    dispatch({ type: "TOGGLE_THEME", payload: !state.theme });
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contacto">Contacto</Link>
      <button onClick={toggleTheme} className="btnTheme">Cambiar Tema</button>
    </nav>
  )
}

export default Navbar