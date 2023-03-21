import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledHeader = styled.header`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	/* border-radius: ${pxToRem(4)}; */
	background: #444554;
	/* color: #FFFD82; */
	display: flex;
	font-size: 1em;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	position: fixed;
	top: 0;

	&:hover {
		/* background: lightgray; */
	}

	&:active {
		/* background: lightgray; */
	}
	&.title-text {
		color: #FFFD82;
		text-align: center
	}
	.login-options {
		display: flex;
		justify-content: center;
	}
`;

export default StyledHeader;
