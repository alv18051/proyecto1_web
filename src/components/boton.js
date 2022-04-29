import React from "react";
import "./Carrusel.css";

export default function boton({direccion, moverCarrusel}){
    return(
        <button 
        onClick = {moverCarrusel}
        className = {direccion === next ? "cambiar siguiente": "cambiar previa"}
        >    
        </button>
    )
}