import Head from 'next/head';
import Link from 'next/link';

// import Button from '../components/Button';
// import Layout from '../components/Layout/Layout';

export default function HomePage() {
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
				<Link href="/search">Search</Link>
				<Link href="/offer">Offer</Link>
			</section>
			<br />
		</>
	);
}
