import './navBar.css'
import pylogo from '../../../assets/images/logopy_Mesa_de_trabajo_1.png'
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {

return (

    <div className='contenedor_general'>

        <div className='contenedor_navbar_padre'>
            <div className='logo_img'>

                <Link to="/">
                <img src={pylogo} alt="" />
                
                </Link>
            </div>

            <div className='contenedor_de_navegacion'>
                <ul>
                <Link to="/zonaeste">BuscaTu</Link>
                <Link>Favoritos</Link>
                <Link to="/mapa">Mi Mapa</Link>
                <Link to="/">Ayuda</Link>
                </ul>
            </div>

            <div className='contenedor_de_busqueda_principal'>
                <div className='sub_contenedor_busqueda'>
                    <input type="search" placeholder='Buscar'/>
                    <p><FaUserAlt /></p>
                </div>
            </div>
        </div>

        {/* <div className='contenedor_planifica'>
            <h2>Planifica menos, vivi mas.</h2>
        </div> */}

    </div>
)
}


export default NavBar