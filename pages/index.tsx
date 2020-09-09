import * as React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar";
import About from "../components/About";

const Index: React.FC = () => {
	return (
		<div className="body">
			<Head>
				<link rel="stylesheet" href="/index/index.css" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
			</Head>
			<NavBar />
			<About />
		</div>
	);
};

export default Index;
