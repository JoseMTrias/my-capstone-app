import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	display: flex;
	position: fixed;
	justify-content: right;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: lightgray;
	color: #000;
	font-size: 1em;
	bottom: 0;
	width: 100%;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledFooter;
