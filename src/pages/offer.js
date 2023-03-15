import Head from 'next/head';

import CreateForm from '../components/CreateForm/CreateForm';
// import Layout from '../components/Layout/Layout';

export default function OfferPage() {
	return (
		<>
			<Head>
				<title key="title">Offer</title>
				<meta key="description" name="description" content="Offer" />
			</Head>
			<h2>Offer</h2>
			<CreateForm></CreateForm>
		</>
	);
}
