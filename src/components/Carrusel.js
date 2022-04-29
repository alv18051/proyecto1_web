import './Carrusel.css'
import React, {useState} from 'react';
import boton from './boton';
import dataCarrusel from './dataCarrusel';


export default function Carrusel(){

    const [carruselSlide, setcarruselSlide] = useState(1)

    const siguienteFoto = () =>{
        if(carruselSlide !== dataCarrusel.length){
            setcarruselSlide(carruselSlide + 1)

        }else{
            setcarruselSlide(1)
        }
    }

    const anteriorFoto = () =>{
        if(carruselSlide !== 1){
            setcarruselSlide(carruselSlide -1)

        }else{
            setcarruselSlide(dataCarrusel.length)
        }
    }

    const movePunto = index => {
        setcarruselSlide(index)
    }


    return (
    <>
    <div className='container-carrusel'>
        {dataCarrusel.map((obj, index)=>{

            return (
                <div key = {obj.id} 
                    className={carruselSlide === index + 1 ? "slide active-anim": "slide"} > 
                    <img
                    src={process.env.PUBLIC_URL +`/Img/img${index + 1}.jpg`}
                    />
                </div>                
            )
        }
        
        )}

        <boton moverCarrusel={siguienteFoto} direccion = {"next"}/>
        <boton moverCarrusel={anteriorFoto} direccion = {"previouse"}/>
        
        <div className='container-puntos'>
            {Array.from({length: 5}).map((item, index)=>(
                <div 
                onClick = {() => movePunto(index + 1 )}
                className = {carruselSlide === index + 1 ? "punto-active": "punto"}>
                </div>
            ))}


        </div>
        </div>    
    </>
)}




