import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`
	padding: 0.5em 1em;
	margin: 5px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: lightgray;
	color: #000;
	font-size: 1em;

	&.button_delete {
		font-size: small;
	}
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledButton;
