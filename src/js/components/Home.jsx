import React from "react";

//include images into your bundle
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Digit from "./Digit.jsx";
import CountdownDigits from "./CountdownDigits.jsx"
import imgCard01 from "../../img/newyork_card_03.jpg";
import imgCard02 from "../../img/newyork_card_05.jpg";
import imgCard03 from "../../img/newyork_card_04.jpg";
import imgCard04 from "../../img/newyork_card_02.jpg";



//create your first component
const Home = ({ days, hours, minutes, seconds }) => {
	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<Jumbotron />
				<div className="row mt-4">
				  <div className="col-md-3">	
					<Card
						imageUrl={imgCard01}
						cardText="Disfrutaremos de las 
						vistas nocturnas desde algún Rooftop"
					/>
				  </div>	
					<div className="col-md-3">	
					<Card
						imageUrl={imgCard02}
						cardText="Aprovecharemos las rebajas 
						para ir de compritas y traernos los Reyes!!"
					/>
				  </div>	
				  <div className="col-md-3">	
					<Card
						imageUrl={imgCard03}
						cardText="Navegaremos por el  Hudson y nos deleitaremos 
						con sus  vistas"
					/>
				  </div>	
				  <div className="col-md-3">	
					<Card
						imageUrl={imgCard04}
						cardText="Y nos perderemos por la noche 
						de Time Square"
					/>
				  </div>	
			  </div>
			  <div className="d-flex justify-content-center my-5">
				<CountdownDigits
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
			  </div>
			</div>
		</>
	);
};

export default Home;