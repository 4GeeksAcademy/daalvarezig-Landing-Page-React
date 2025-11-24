import React from "react";

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