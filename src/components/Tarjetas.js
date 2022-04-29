import React from 'react';
import './tarjetas.css'

function Tarjeta(props) {

    return(

        <div className='tarjeta'>
            <div className='cuerpo'>
                <img className = 'imgSA' src={props.img}/>
                <h2 className ='titulo'>{props.titulo}</h2>
                <p className= 'descripcion'>{props.descripcion}</p>
                <button className='Boton'>Read more</button>
            </div>
           

        </div>

    )

    

}

export default Tarjeta