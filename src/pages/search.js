import Head from 'next/head';
import Link from 'next/link';

import Form from '../components/Form/Form';

// import Layout from '../components/Layout/Layout';

export default function SearchPage() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="Search" />
			</Head>
			<Link href="/search">
				<h2>Search</h2>
			</Link>
			<Form></Form>
		</>
	);
}
