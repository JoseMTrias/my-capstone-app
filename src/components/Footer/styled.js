import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: lightgray;
	color: #000;
	display: flex;
	font-size: 1em;
	justify-content: right;
	position: fixed;
	width: 100%;
	bottom: 0;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledFooter;
