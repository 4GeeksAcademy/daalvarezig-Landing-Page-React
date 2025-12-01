import React from "react";
import imgCard01 from "../../img/newyork_card_01.jpg";
import imgCard02 from "../../img/newyork_card_02.jpg";
import imgCard03 from "../../img/newyork_card_04.jpg";
import imgCard04 from "../../img/newyork_card_05.jpg";

const Card = ({ imageUrl, cardText, buttonText, buttonLink }) => {

return ( 
    <div className="card h-100">
      <div className="ratio ratio-1x1">  
        <img className="card-img-top img-fluid object-fit-cover" src={ imageUrl } alt="..."/>
      </div> 
         <div className="card-body">
             <p className="card-text" >{ cardText }</p>
         </div>
         {buttonText && (
         <a href={buttonLink} target="_blank" className="btn btn-primary btn-lg">
                    { buttonText }</a>
         )}
      
    </div>
 );
};

export default Card;