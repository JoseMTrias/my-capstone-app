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
			<h2 className='slogan'>PLUG IN<br></br> TUNE UP<br></br> ROCK OUT!</h2>
			<p className='p-text-landingpage'>
			Sign in, post your announcements and connect with musicians and mindliked people!
The Band Seed´s  interactive Location Map leads you to music venues and rehearsal rooms all around your city!			</p>
			<br />
		</>
	);
}
