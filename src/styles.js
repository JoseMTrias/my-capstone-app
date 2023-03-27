import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;


	}

	body {
		margin: 0;
		padding-top: 4em;
		font-size: 1rem;
		border-left: 10px;
		font-size: 1rem;
		color: black;
		background-color: white;
		/* background-image: url('aptbs_fondo.jpg');
		background-size: cover; */
	}


	link.user-profile {
		text-decoration: underline;
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
		padding: 0px 0 20px 0;
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
`;
