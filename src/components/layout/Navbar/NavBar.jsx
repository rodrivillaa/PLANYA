import './navBar.css'
import pylogo from '../../../assets/images/logopy_Mesa_de_trabajo_1.png'
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {

return (

    <div className='contenedor_general'>

        <div className='contenedor_navbar_padre'>
            <div className='logo_img'>
                <img src={pylogo} alt="" />
            </div>

            <div className='contenedor_de_navegacion'>
                <ul>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Favoritos</a></li>
                    <li><a href="#">Mi Mapa</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
            </div>

            <div className='contenedor_de_busqueda_principal'>
                <div className='sub_contenedor_busqueda'>
                    <input type="search" placeholder='Buscar'/>
                    <p><FaUserAlt /></p>
                </div>
            </div>
        </div>

        <div className='contenedor_planifica'>
            <h2>Planifica menos, vivi mas.</h2>
        </div>

    </div>
)
}


export default NavBar