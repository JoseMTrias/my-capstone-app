import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledHeader = styled.header`
	padding: 0.5em 1em;
	background-color: #93A8AC;
	/* background-color: white; */
	display: flex;
	font-size: 1em;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100px;
	position: fixed;
	top: 0;
	

	&:hover {
		/* background: lightgray; */
	}

	&:active {
		/* background: lightgray; */
	}
	a {
		color: #FFFD82;
		text-align: center
	}
	.login-options {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		
		
	}
`;

export default StyledHeader;
