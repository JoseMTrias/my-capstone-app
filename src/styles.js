import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif
	}

	body {
		margin: 0;
		font-size: 1rem;
		border-left: 10px;
	}


	.landing_page {
		display: flex;
		justify-content: center;
		gap: 5rem
	}
`;
