import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h3 className='map-header'>About</h3>
			<p className='about-text'>
			The Band Seeds is a platform that connects musicians and mindliked people. Every signed up user can browse through
			announements of all kinds of musician types, music fields and individual locations; as well as posting it's own request!
			The Band Seeds interactive Location Map links to music venues and rehearsal rooms all around the chosen city!
			</p>
		</>
	);
}
