// src/components/BaresList.js
import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import "./zonasur.css"

const ZonaSur = () => {
  const [bares, setBares] = useState([]); // Estado para guardar los bares

  useEffect(() => {
    // Función para obtener bares desde Firestore
    const fetchBares = async () => {
      const baresCollection = collection(db, "bares"); // Referencia a la colección "bares"
      const baresSnapshot = await getDocs(baresCollection); // Obtiene los documentos
      

      // Filtrar bares solo de la zona sur
      const baresList = baresSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(bar => bar.zona === "sur"); // Filtra los bares por zona sur

      setBares(baresList); // Actualiza el estado con la lista de bares
    };

    fetchBares(); // Llama a la función al montar el componente
  }, []);


  return (

    <div>
      <h1 style={{textAlign:"center"}}>Bares en Buenos Aires</h1>

      <div className='contenedorBares'>
        {bares.map((bar) => (

        <div className='subContenedor' key={bar.id}>

            <div className='ImagenBoliche'>
              {bar.imagenURL ? (
                <img src={bar.imagenURL} alt={`Imagen de ${bar.nombre}`} width="200" />
              ) : (
                <p>Imagen no disponible</p>
              )}
            </div>

            <div className='contenedorDeImagen'>

              <div className='informacionImagenes'>
                <h3>{bar.nombre}</h3>
                <p>{bar.direccion}</p>
              </div>

              <div className='btn-Imagenes'>
                <Link to={`/bares/${bar.id}`}>
                  <button>Ver Mas</button>
                </Link>
              </div>

            </div>

        </div>
        
        ))}
      </div>
    </div>
  );
};

export default ZonaSur;

