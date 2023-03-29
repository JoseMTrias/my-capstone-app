import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Board from "../components/Board/Board";
import Card from '../components/Card/Card';

export default function HomePage() {
	

	return (
		<>
			<Head>
				<title key="title">TheBandSeeds</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h2>PLUG IN<br></br> TUNE UP<br></br> ROCK OUT!</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
				dolor. Aenean massa. 
			</p>
			<br />
		</>
	);
}
