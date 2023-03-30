import Head from 'next/head';
import StyledButton from '../components/Button/styled';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h3 className='map-header'>ABOUT</h3>
			<p className='about-text'>
			The Band Seeds is a platform that connects musicians and mindliked people.<br></br> Every signed up user can browse through
			announements of all kinds of musician types, music fields and individual locations; as well as posting it's own request!
			</p>
			<p>The Band Seeds location map links to music venues and rehearsal rooms all around the chosen city!</p>
			<p className='about-contact-text'>This site is run by JT.<br></br>
			If you want to submit a venue or a rehearsal room, if you have questions or requests concerning the app, or you just want to say hi, please feel free to contact us:</p>
			<StyledButton className='button-contact'>
				<a href="mailto:jmgarciatrias@gmail.com" className='contact-button-link'>contact</a>
			</StyledButton>
		</>
	);
}


// href='mailto:jmgarciatrias@gmail.com