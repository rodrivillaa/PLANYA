import './nosotros.css'
import bannerlogo from '../../../assets/images/pyaa_Mesa_de_trabajo_1.png'

const Nosotros = () => {

  return (

    <div className='contenedorPadreContactos'>
        
      <div className='contenedorSub_1' > 
        <h1>NOSOTROS</h1>
        <p>
            PlanYA es una aplicación que permita a los usuarios encontrar y compartir planes de manera sencilla, agil y efectiva.  Simplifica la forma en que las personas descubren lugares interesantes, ya sea para una noche en la ciudad, un fin de semana en familia o un tiempo al aire libre.
            La plataforma ofrece a los usuarios una manera sencilla, ágil y efectiva de encontrar experiencias únicas, ajustadas a sus intereses y necesidades, mientras fomenta la interacción y el intercambio de recomendaciones dentro de una comunidad activa.
        </p>
      </div>

      <div className='contenedorSub_2' >
        <h2>NUESTRO COMPROMISO</h2>
        <p>Estamos comprometidos a ofrecer una experiencia optimizada y personalizada. 
            Utilizamos tecnología avanzada para asegurarnos de que cada recomendación se ajuste a los 
            intereses y necesidades del usuario, garantizando que siempre encontrarán algo que les apasione. 
            Además, nos esforzamos por mantener nuestra plataforma segura, confiable y en constante evolución 
            para brindar siempre el mejor servicio.
        </p>
      </div>

      <div className='contenedorSub_3' >
        <h2>LO QUE NOS DIFERENCIA...</h2>
        <p>
        Nuestra plataforma está diseñada pensando en la facilidad de uso. Queremos que cualquier persona, sin importar su nivel de experiencia tecnológica, pueda navegar con confianza y descubrir planos personalizados según sus intereses. Desde eventos exclusivos hasta rincones ocultos de la ciudad, PlanYA te ayuda a encontrar el plan perfecto de manera rápida y sencilla.
        Además, fomentamos una comunidad activa y colaborativa. Los usuarios no solo pueden descubrir nuevas experiencias, sino que también pueden compartir sus propias recomendaciones, creando un ciclo de inspiración que beneficia a todos. Aquí, creemos que las mejores aventuras son aquellas que se comparten.
        </p>
      </div>

      <div className='contenedorSub_4'>
        <img src={bannerlogo} alt="" />
      </div>

    </div>
  )
}

export default Nosotros











