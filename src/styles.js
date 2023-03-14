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
	}

	body {
		margin: 0;
		border-left: 10px;
		font-size: 1rem;
	}


	.landing_page {
		display: flex;
		justify-content: center;
		gap: 5rem
	}
`;
