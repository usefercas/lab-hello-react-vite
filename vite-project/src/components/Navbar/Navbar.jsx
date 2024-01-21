
import logo from '../../assets/ironhack-logo-xs.png'
import boton from '../../assets/menu-top-xs.png'
import './Navbar.css'

const Navbar = () => {
  return (

    <nav className="navbar">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div id="boton">
        <img src={boton} alt="" />
      </div>

      <div className='contenedor'>
        <h1 id="titulo">
          Shay hello to ReactJS
        </h1>
        <p id="parrafo">
          You will learn how to use
          the most popular frontend Library,
          and become a super Ninja developer.
        </p>

        <button id="miBoton">Awesome!</button>
      </div>



    </nav>
  )
}

export default Navbar;




