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
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
				dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Donec quam felis,
			</p>
			<section>
				<Button>Search</Button>
				<Button>Offer</Button>
			</section>
			<br />
		</Layout>
	);
}
