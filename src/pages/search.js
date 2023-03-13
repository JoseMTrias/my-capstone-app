import Head from 'next/head';

import Form from '../components/Form/Form';

// import Layout from '../components/Layout/Layout';

export default function SearchPage() {
	return (
		<>
			<Head>
				<title key="title">Search</title>
				<meta key="description" name="description" content="Search" />
			</Head>
			<h2>Search</h2>
			<Form></Form>
		</>
	);
}
