// import { useSession, signIn, signOut } from "next-auth/react"

import Head from 'next/head';
import Link from 'next/link';
import Board from "../components/Board/Board";

export default function HomePage() {
	// const { data: session } = useSession()
	
	return (
		<>
			<Head>
				<title key="title">Music App</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h2>Home</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
				dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Donec quam felis,
			</p>
			<section className="landing_page">
			</section>
			<br />
		</>
	);
}
