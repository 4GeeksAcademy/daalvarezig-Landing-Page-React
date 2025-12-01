import React from "react";
import Digit from "./Digit.jsx";

const CountdownDigits = ({ days, hours, minutes, seconds }) => {

//Convertirmos a dos digitos
const toTwoDigits = (num) => {
        let str = num.toString();
        while (str.length < 2) {
            str = "0" + str;
        }
        return str.split("");
    };

const d = toTwoDigits(days);
const h = toTwoDigits(hours);
const m = toTwoDigits(minutes);
const s = toTwoDigits(seconds);    

return (
        <div 
            className="counter-box bg-primary p-4 rounded d-flex flex-column align-items-center"
            style={{ width: "fit-content" }}
        >
            <h1 className="text-white mb-4">Cuenta atrás para Nueva York ✈️</h1>
            <div className="d-flex align-items-center">
                {/* DÍAS */}
                <Digit digit={d[0]} />
                <Digit digit={d[1]} />
                <div className="text-white fs-2 mx-2">:</div>
                {/* HORAS */}
                <Digit digit={h[0]} />
                <Digit digit={h[1]} />
                <div className="text-white fs-2 mx-2">:</div>

                {/* MINUTOS */}
                <Digit digit={m[0]} />
                <Digit digit={m[1]} />

                <div className="text-white fs-2 mx-2">:</div>

                {/* SEGUNDOS */}
                <Digit digit={s[0]} />
                <Digit digit={s[1]} />
            </div>
            {/* Labels */}
            <div className="d-flex justify-content-between mt-2 w-100 text-white">
                <small className="text-center" style={{ width: "34%" }}>Días</small>
                <small className="text-center" style={{ width: "03%" }}>Horas</small>
                <small className="text-center" style={{ width: "15%" }}>Minutos</small>
                <small className="text-center" style={{ width: "05%" }}>Segundos</small>
                <small className="text-center" style={{ width: "15%" }}>  </small>
            </div>
        </div>
    );
};

export default CountdownDigits;