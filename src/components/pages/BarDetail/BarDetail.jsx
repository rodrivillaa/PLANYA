import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import "./bardetail.css"

const BarDetail = () => {
  const { id } = useParams(); // Extrae el id desde la URL
  const [bar, setBar] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar el mensaje de carga

  useEffect(() => {
    const fetchBarDetail = async () => {
      const barDoc = doc(db, "bares", id);
      const barSnapshot = await getDoc(barDoc);
      if (barSnapshot.exists()) {
        setBar(barSnapshot.data());
      } else {
        console.log("No se encontró el bar");
      }
    };

    fetchBarDetail();

        // Configura un timeout para el mensaje de carga
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2000); // 3 segundos
    
        // Limpia el timeout cuando se desmonta el componente
        return () => clearTimeout(timeoutId);

  }, [id]);




return (

    <div className='ContenedorDetallesPadreTotal'>

      {loading ? (
        <p className="loading">Cargando detalles del bar...</p>
      ) :bar ? (

        <div>

          <div className='contenedorTitulo'>
            <h1>BOLICHE - {bar.nombre}</h1>
          </div>


          <div className='contenedorPrecioHorario'>
            <span>Desde $5000</span>
            <p>Horarios 12pm -  6am</p>
            <p>Dias:  Viernes a Domingo</p>
          </div>

          <div className='contenedorImagen'>
            {bar.imagenURL && <img src={bar.imagenURL} alt={`Imagen de ${bar.nombre}`} width="400" />}
          </div>

          <div>
            <p>Icono de guardado y mapa</p>
          </div>

          <div>
            <p>Informacion</p>
            <p>Descripción: {bar.descripcion}</p>
            <Link to="/baresList">
              <button>Volver</button>
            </Link>
          </div>

          <div>
            <p>Precios Botellas</p>
          </div>

          <div>
            <p>Ubicacion</p>
            <p>Dirección: {bar.direccion}</p>
          </div>

            
            
            
            
          
        </div>
        
    ) : ( 
        <p>no se encontro el bar...</p>
    )}
    </div>
);
};

export default BarDetail;