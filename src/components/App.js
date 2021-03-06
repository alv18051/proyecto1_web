/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.css';
import Carrusel from './Carrusel';
import Tarjeta from './Tarjetas';



function App(){
  return (
    
    <div className="body">

      <div className='side-bar-nav'>
        <img className='side-bar-top' src='https://i.imgur.com/kOXo2t1.png'></img>
                

        <div className='side-bar-lista'>

        </div>


      </div>

      <div className='carrousel'>
        <Carrusel
          img={[
            'https://i.imgur.com/GXf1524.jpg',
            'https://i.imgur.com/YWmMgHN.jpg',
            'https://i.imgur.com/RbbD1eZ.jpg',
            'https://i.imgur.com/xD0rmAw.jpg',
            'https://i.imgur.com/Mqw7ZrV.jpg'
          ]}
        />

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

      <div className='texto'>
        <h1>Hybrid Technology Earphones</h1>
        <h2>Get the perfect sound quality with our Hybrid technology.</h2>
      </div>
            
      <div className='grid-productos'>
                
        <Tarjeta titulo = 'KZ ZES' img = 'https://kz-audio.com/images/main-card-zes.jpg' descripcion = 'Electrostatic + Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ X Crinacle CRN' img = 'https://kz-audio.com/images/main-card-crinacle-crn.jpg' descripcion = 'Magnetostatic n Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZEX pro' img = 'https://kz-audio.com/images/main-card-zex-pro.jpg' descripcion = 'Magnetostatic n Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZEX' img = 'https://kz-audio.com/images/main-card-zex.jpg' descripcion = 'First dual unit electrostatic'/>
        <Tarjeta titulo = 'KZ ZAS' img = 'https://kz-audio.com/images/main-card-zas.jpg' descripcion = '16 unit Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZSN Pro X' img = 'https://kz-audio.com/images/main-card-zsn-pro-x.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZST X' img = 'https://kz-audio.com/images/main-card-zst-x.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZS10 Pro' img = 'https://kz-audio.com/images/main-card-zs10pro.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZSX' img = 'https://kz-audio.com/images/main-card-zsx.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZAX' img = 'https://kz-audio.com/images/main-card-zax.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZSN Pro' img = 'https://kz-audio.com/images/main-card-zsn-pro.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZSN' img = 'https://kz-audio.com/images/main-card-zsn.jpg' descripcion = 'Dynamic Hybrid Earphones'/>
        <Tarjeta titulo = 'KZ ZS4' img = 'https://kz-audio.com/images/main-card-zs4.jpg' descripcion = 'Dynamic Hybrid Earphones'/>

      </div>

      <div className='texto'>
        <h1>Balanced Armature Earphones</h1>
        <h2>Experience superb sound detail across the entire frequency range.</h2>
      </div>
      <div className='grid-productos'>
        <Tarjeta titulo = 'KZ AST' img = 'https://kz-audio.com/images/main-card-ast.jpg' descripcion = 'MultiDriver Earphones'/>
        <Tarjeta titulo = 'KZ AS10' img = 'https://kz-audio.com/images/main-card-as10.jpg' descripcion = 'MultiDriver Earphones'/>
        <Tarjeta titulo = 'KZ AS12' img = 'https://kz-audio.com/images/main-card-as12.jpg' descripcion = 'MultiDriver Earphones'/>
        <Tarjeta titulo = 'KZ AS16' img = 'https://kz-audio.com/images/main-card-as16.jpg' descripcion = 'MultiDriver Earphones'/>
        <Tarjeta titulo = 'KZ ASF' img = 'https://kz-audio.com/images/main-card-asf.jpg' descripcion = 'MultiDriver Earphones'/>
        <Tarjeta titulo = 'KZ ASX' img = 'https://kz-audio.com/images/main-card-asx.jpg' descripcion = 'MultiDriver Earphones'/>


      </div>

      <div className='texto'>
        <h1>Bluetooth Earphones</h1>
        <h2>Enjoy superior sound quality with portable Bluetooth headphones.</h2>
      </div>
      <div className='grid-productos'>
        <Tarjeta titulo = 'KZ SK10 Pro' img = 'https://kz-audio.com/images/main-card-sk10-pro.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ T10' img = 'https://kz-audio.com/images/main-card-t10.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ VX10' img = 'https://kz-audio.com/images/main-card-vx10.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ SK10' img = 'https://kz-audio.com/images/main-card-sk10.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ Z3' img = 'https://kz-audio.com/images/main-card-z3.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ SKS' img = 'https://kz-audio.com/images/main-card-sks.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ SA08' img = 'https://kz-audio.com/images/main-card-sa08.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ S1 / KZ S1D' img = 'https://kz-audio.com/images/main-card-s1-s1d-2.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ S2' img = 'https://kz-audio.com/images/main-card-s2.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ BTE' img = 'https://kz-audio.com/images/main-card-bte.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ Z1' img = 'https://kz-audio.com/images/main-card-z1.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ Z1 Pro' img = 'https://kz-audio.com/images/main-card-z1-pro.jpg' descripcion = 'Bluetooth headphones'/>
        <Tarjeta titulo = 'KZ E10' img = 'https://kz-audio.com/images/main-card-e10.jpg' descripcion = 'Bluetooth headphones'/>
            


      </div>

      <div className='texto'>
        <h1>Dynamic Drivers Earphones</h1>
        <h2>Excellent acoustic adjustment technology makes sound full of texture.</h2>
      </div>
      <div className='grid-productos'>
        <Tarjeta titulo = 'KZ EDA' img = 'https://kz-audio.com/images/main-card-eda.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ x HBB DQ6S' img = 'https://kz-audio.com/images/main-card-hbb-dq6s.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ EDS' img = 'https://kz-audio.com/images/main-card-eds.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ EDC' img = 'https://kz-audio.com/images/main-card-edc.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ EDX Pro' img = 'https://kz-audio.com/images/main-card-edx-pro.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ EDX' img = 'https://kz-audio.com/images/main-card-edx.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ DQ6' img = 'https://kz-audio.com/images/main-card-dq6.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ ZS3E' img = 'https://kz-audio.com/images/main-card-zs3e.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ ZS3' img = 'https://kz-audio.com/images/main-card-zs3.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ ED' img = 'https://kz-audio.com/images/main-card-ed.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ ED4' img = 'https://kz-audio.com/images/main-card-ed4.jpg' descripcion = 'Dynamic unit earphnes'/>
        <Tarjeta titulo = 'KZ ED9' img = 'https://kz-audio.com/images/main-card-ed9.jpg' descripcion = 'Dynamic unit earphnes'/>


      </div>

      <div className='texto'>
        <h1>Upgrade Cables</h1>
        <h2>Improve your earphones with a new one upgrade cable or turn it into a Bluetooth headset</h2>
      </div>
      <div className='grid-productos'>
        <Tarjeta titulo = 'KZ AZ10' img = 'https://kz-audio.com/images/main-card-az10.jpg' descripcion = 'Upgrade cable adding Bluetooth'/>
        <Tarjeta titulo = 'KZ AZ09 Pro' img = 'https://kz-audio.com/images/main-card-az09-pro.jpg' descripcion = 'Upgrade cable adding Bluetooth'/>
        <Tarjeta titulo = 'KZ AZ09' img = 'https://kz-audio.com/images/main-card-az09.jpg' descripcion = 'Upgrade cable adding Bluetooth'/>
        <Tarjeta titulo = 'KZ Bluetooth 5.0' img = 'https://kz-audio.com/images/main-card-s1-cable-bt50.jpg' descripcion = 'Upgrade cable adding Bluetooth'/>
        <Tarjeta titulo = 'KZ Bluetooth 4.2' img = 'https://kz-audio.com/images/main-card-s1-cable-bt42.jpg' descripcion = 'Upgrade cable adding Bluetooth'/>


      </div>
      <div className='timeline'>
        <img className = 'timelime-img' src='https://i.imgur.com/sxdRC4g.png'/>

      </div>

      <div className='footer'>
        <img className = 'footer-img' src='https://i.imgur.com/RGMWBa6.png'/>
            

      </div>

            
               
               
    </div>
    

    

  );}




export default App;