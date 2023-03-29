import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h3 className='about-header'>About</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
				dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
				quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
				nec, vulputate
			</p>
		</>
	);
}
