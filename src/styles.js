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
		color: #FFFD82;
		background-color: #7F7B82;

	}
	main {
		padding: 1em;
	}

	.landing_page {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding-top: 1em;
		
	}
	a {
		color: #FFFD82;
		text-decoration: line
	}
`;
