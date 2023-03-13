import Head from 'next/head';

import Layout from '../components/Layout/Layout';

export default function AboutPage() {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>About</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
				dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
				quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
				nec, vulputate
			</p>
		</Layout>
	);
}
