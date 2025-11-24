import React from "react";

//include images into your bundle
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container mt-4">

				<Jumbotron />

				<div className="row mt-4">
				  <div className="col-md-3">	
					<Card
						imageUrl="https://picsum.photos/300/200"
						cardText="Esta es la card 1"
					/>
				  </div>	

					<div className="col-md-3">	
					<Card
						imageUrl="https://picsum.photos/300/200"
						cardText="Esta es la card 2"
					/>
				  </div>	

				  <div className="col-md-3">	
					<Card
						imageUrl="https://picsum.photos/300/200"
						cardText="Esta es la card 3"
					/>
				  </div>	

				  <div className="col-md-3">	
					<Card
						imageUrl="https://picsum.photos/300/200"
						cardText="Esta es la card 4"
					/>
				  </div>	
			  </div>
			</div>
		</>
	);
};

export default Home;