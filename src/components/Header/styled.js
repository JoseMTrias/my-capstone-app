import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledHeader = styled.header`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: lightgray;
	color: #000;
	display: flex;
	font-size: 1em;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 0;

	&:hover {
		background: lightgray;
	}

	&:active {
		background: lightgray;
	}
`;

export default StyledHeader;
