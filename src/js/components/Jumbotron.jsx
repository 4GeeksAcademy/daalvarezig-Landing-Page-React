import React from "react";  
import jumbotronImage from "../../img/newyork_jumbotron.jpg";

const Jumbotron = ({ buttonLink }) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3"
          style={{
            backgroundImage: `url(${jumbotronImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "320px",
            position: "relative",
          }}
        >  
            <div className="container py-5">
                <h1 className="display-5 fw-bold text-white">Navidades en Nueva York!!</h1>
                  <p className="col-md-8 fs-4 text-white">
                    Estaremos 6 dias en NY, incluido el dia de noche vieja, aprovecharemos
                    las rebajas navideñas para comprar los Reyes Magos, pasaremos frio
                    y disfrutaremos de la magia navideña...
                  </p>
                  <a href={buttonLink} target="_blank" className="btn btn-primary btn-lg">
                    Empieza el viaje!</a>
            </div>
        </div>
    );
};

export default Jumbotron;
