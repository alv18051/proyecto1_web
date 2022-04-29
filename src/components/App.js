import React from 'react';
import './App.css'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjetas';



function App(){
    return (
    
        <div class="content/wrap">

            <div className='side-bar-nav'>
                <div className='side-bar-top'>

                </div>

                <div className='side-bar-lista'>

                </div>


            </div>

            <div className='carrousel'>
               

            </div>
            <div className='texto'>
                <div className='filosofia'>
                <h1>KZ Earphone</h1>
                <br></br>
                <p>KZ, the brand name under which the Guangdong-based Shenzhen Yuan Ze Electronics Co.
                    operates, was founded in 2008, making it a legacy brand by Chi-Fi standards. The founders 
                    are Keith Yue, a former Audio-Technica engineer, and Zen Li, a Western-trained classical 
                    musician. The name KZ isn't just a nod to the founders' initials, but is also short for 
                    "Knowledge Zenith". The company offers an impressive range of low-priced earphones that 
                    crib the form-factor from many moderately priced earphones provided by the mainstream brands.</p>
                <br></br>
                <p>KZ originated, in 2013 advocated ultimate, fashion and simplicity focusing on the faith of revolutionary pursuit ultimate attitude forward life.</p>
                <br></br>
                KZ is the world's leading audio earphone device manufacturer, provides professional audio KZ service covering more than 100 countries and regions.
                <br></br>

                </div>
                <div className='slogan'>
                    <br></br>
                    <img src='https://i.imgur.com/BSgGOVw.png'></img>
                    <p> Don't forget, the originally intended use headphones to enjoy the music!</p>

                </div>

            </div>
            <div className='grid-productos'>
                <Tarjeta titulo = 'Prueba' img = 'https://kz-audio.com/images/main-card-bte.jpg' descripcion = 'Prueba'/>
                <Tarjeta titulo = 'Prueba2' img = 'https://kz-audio.com/images/main-card-bte.jpg' descripcion = 'Prueba2'/>
                


            </div>
            <div className='grid-productos'>

            </div>
            <div className='grid-productos'>

            </div>
            <div className='grid-productos'>

            </div>
            <div className='grid-productos'>

            </div>
            <div className='timeline'>
                <img classname = 'timelime-img' src='https://i.imgur.com/sxdRC4g.png'/>

            </div>

            <div className='footer'>
                <div className='footer-logo'>

                </div>
                <div className='contact info'>

                </div>

            </div>

            
               
               
        </div>
    

    

)}




export default App