import './Carrusel.css';
import React, {useState, useEffect} from 'react';

export default function Carrusel({img}){

  const Thumbnail = ({ arr, image, index }) => {
    return (<div className="tumbnail">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>);
  };

  const [index, setIndex] = useState(0);

  const sig = () =>{
    if(index === img.lenght - 1 ){
      setIndex(0);

    }else{
      setIndex(index+1);
    }
  };

  const ant = () =>{
    if(index === 0){
      setIndex(img.lenght -1);
    }else{
      setIndex(index - 1);
    }
  };


  useEffect(() => {
    setIndex(0);
  }, []);

  return(
    
    <div className="slideshow">
      <img className="mainImg" src={img[index]} />
      <div className="actions">
        <button onClick={sig}></button>
        <button onClick={ant}></button>
      </div>
      <Thumbnail arr={img} image={setIndex} index={index} />
    </div>


  );}




