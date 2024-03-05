import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
	 	<Navbar/>
		<div className="container p-4">
			<Jumbotron/>
			<div className="d-flex justify-content-center p-4">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
			<Footer/>
		</>
	);
};

export default Home;
