import Head from 'next/head';

import Button from '../components/Button';
import Layout from '../components/Layout/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Home</h1>
			<section>
				<Button>Search</Button>
				<Button>Offer</Button>
			</section>
			<br />
		</Layout>
	);
}
