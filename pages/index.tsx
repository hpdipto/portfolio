import * as React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Education from "../components/Education";
import Works from "../components/Works";
import Contacts from "../components/Contacts";
import Sidebar from "../components/Sidebar";

const FullSite: React.FC = () => {
	return (
		<div>
			<Intro />
			<About />
			<Education />
			<Works />
			<Contacts />
		</div>
	);
};

const Index: React.FC = () => {
	return (
		<div className="body">
			<Head>
				<link rel="stylesheet" href="/index/index.css" />
				<script
					src="https://kit.fontawesome.com/767858f8a7.js"
					crossOrigin="anonymous"
				></script>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
				<title>Haris Dipto | Full Stack Web Developer</title>
			</Head>
			<NavBar />
			<Sidebar contents={<FullSite />} />
			{/* <FullSite /> */}
		</div>
	);
};

export default Index;
