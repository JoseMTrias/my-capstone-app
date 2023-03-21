import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`
	/* padding: 0.5em 1em; */
	/* padding: 0px 10px; */
	margin: 0px 2px 2px 6px;
	/* border: 1px solid rgba(0, 0, 0, 0.3); */
	/* border-radius: ${pxToRem(4)}; */
	background: #1F2833;
	color: #FFFD82;
	font-size: 0.8em;

	&.login-options {
		display: flex;
	}

	&.button_delete {
		font-size: small;
	}
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledButton;
