import "./boliche.css"
import { boliches } from '../../../boliches'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


let myBoliches = new Promise ( (resolve, reject) => {
  setTimeout(() => {
    resolve(boliches)
    }, 2000)
})




export const BolichesContainer = () => {

  const [boliches, setBoliches] = useState([])


  useEffect(()=>{
    myBoliches.then((boliches) => {
      setBoliches(boliches)
      })
  },[])

  console.log(boliches)



  return (
    <div>
      {
        boliches.map((boliches) =>{
          return (
            <div  key={boliches.id}>
              <h1>{boliches.nombre}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
