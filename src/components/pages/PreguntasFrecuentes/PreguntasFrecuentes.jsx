
import "./preguntasFrecuentes.css"
import bannerlogo from '../../../assets/images/pyaa_Mesa_de_trabajo_1.png'


const PreguntasFrecuentes = () => {
  return (
    <div className="contenedorPadre">
        <h1>PREGUNTAS FRECUENTES</h1>
        

      <div className="contenedor_1" >
        <h2>¿Que es PlanYa?</h2>
        <p> 
            PlanYA es una plataforma que te permite descubrir y compartir planes y actividades de manera sencilla y efectiva, ajustadas a tus intereses y necesidades.  
        </p>
      </div>


      <div className="contenedor_2" >
        <h2>¿Como funciona PlanYA?</h2>
        <p>
            PlanYA te muestra planes recomendados según tus preferencias. Puedes explorar categorías, ver planos populares y recibir sugerencias personalizadas. También puedes compartir tus propios planos con la comunidad.
        </p>
      </div>


      <div className="contenedor_3" >
        <h2>¿PlanYa tiene un costo?</h2>
        <p>
            La aplicación es completamente gratuita.
        </p>
      </div>



      <div className="contenedor_4" >
        <h2>¿Cómo puedo contactar al soporte?</h2>
        <p>
            Puedes contactarnos a través del formulario de contacto en nuestra web o enviando un correo a soporte @planya.com .Nuestro equipo de atención al cliente estará encantado de ayudarle.
        </p>
      </div>


      <div className="contenedor_5" >
        <img src={bannerlogo} alt="" />
      </div>

    </div>
  )
}
export default PreguntasFrecuentes
