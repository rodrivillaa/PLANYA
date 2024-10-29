import "./Footer.css"
import pylogo from '../../../assets/images/logopy_Mesa_de_trabajo_1.png'


const Footer = () => {

return(

<>

<div className="contenedor-footer">

    <div className="contenedor-datos">

        <div className="datos">


            <div className="nosotros">
                <h1>Nosotros</h1>
                <p>Compañia</p>
                <p>Empleos</p>
                <p>Inversionistas</p>
                <p>Noticias</p>
            </div>

            <div className="ayuda">

            <h1>Ayuda</h1>
            <p>contactanos</p>
            <p>Preguntas</p>
            <p>Frecuentes</p>
            <p>Metodos de Pago</p>
            <p>Cambios y devoluciones</p>

            </div>

            <div className="suscursales">
            <h1>Sucursales</h1>
            <p>Avellaneda</p>
            <p>CABA</p>
            <p>Cordoba</p>
            <p>Mendoza</p>
            <p>San Luis</p>
            <p>Bariloche</p>

            </div>
        </div>


        <div className="imagen">
            <div className="img-footer">
                <img src={pylogo} alt="" />
            </div>
        </div>
    </div>
</div>


</>


)

}

export default Footer