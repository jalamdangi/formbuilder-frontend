import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home">Form Builder</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Signin</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="" onClick={()=>handleLogout()}>Logout</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar