import React from "react";
import imgCard01 from "../../img/newyork_card_01.jpg";
import imgCard02 from "../../img/newyork_card_02.jpg";
import imgCard03 from "../../img/newyork_card_04.jpg";
import imgCard04 from "../../img/newyork_card_05.jpg";

const Card = ({ imageUrl, cardText }) => {

return ( 
    <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={ imageUrl } alt="..."/>
        <div className="card-body">
             <p className="card-text" >{ cardText }</p>
        </div>
    </div>
 );
};

export default Card;