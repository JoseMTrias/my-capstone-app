import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	padding: 0.8em 0.8em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: lightgray;
	color: #000;
	font-size: 0.8em;
	display: flex;
	justify-content: right;
	width: 100%;
	position: fixed;
	bottom: 0;
	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledFooter;
