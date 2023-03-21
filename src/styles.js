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
		padding-top: 5em;
		font-size: 1rem;
		border-left: 10px;
		font-size: 1rem;
		color: #172121;
		background-color: white;
		


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
	padding: 50px 0 50px 0;
	font-family: Helvetica;

	}

	.landing_page {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding-top: 1em;
		
		
	}
	a {
		/* color: #FFFD82; */
		color: black;
		text-decoration: none
	}
`;
