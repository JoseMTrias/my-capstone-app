import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
		font-family: Arial, Helvetica, sans-serif;
	}

	textarea {
		font-family: inherit;
	}

	body {
		margin: 0;
		padding-top: 2em;
		padding-bottom: 4em;
		font-size: 1rem;
		border-left: 10px;
		font-size: 1rem;
		color: white;
		background-image: url('../aptbs_fondo1.jpg');
		background-size: cover;
		background-attachment: fixed;
	}
	
	main {
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
		align-content: center;
		gap: 0.5rem;
		margin: 50px;
		padding: 20px 0 20px 0;
		font-family: Helvetica;
	}

	.landing_page {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding-top: 1em;
	}

	a {
		text-decoration: none
	}

	.map {
		width: 100%;
		height: 350px;
		border: 1px solid black;
		box-shadow: 10px 10px 0px 0px #f4e158, -40px 37px 0px 30px rgba(0,0,0,0);
	}

	.map-header {
		display: flex;
		justify-content: center;
		color: #f4e158;
	}

	.slogan {
		color: #f4e158;
		padding-top: 30px;
		display: flex;
		justify-content: left;
		text-align: left;
	}

	.about-header {
		margin-top: 2em;
		margin-bottom: 0;
	}
	
	.ad-profile-header {
		margin-top: 15px;
		display: flex;
		justify-content: center;
		color: #f4e158
	}

	.footer-link-text {
		color: white;
	}

	.p-text-landingpage {
		text-align: left;
	}

	.about-contact-text {
		color: black;
	}

	.contact-button-link {
		color: black;
	}

`;

