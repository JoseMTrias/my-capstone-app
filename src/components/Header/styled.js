import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledHeader = styled.header`
	padding: 0.5em 1em;
	background-color: white;
	display: flex;
	font-size: 1em;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	border-bottom: 1px #dcdcdc solid;
	
	.title-text {
		padding-top: 7px;
	}

	&:hover {
		/* background: lightgray; */
	}

	&:active {
		/* background: lightgray; */
	}
	a {
		color: black;
		text-align: center
	}
	.login-options {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		
		
	}
`;

export default StyledHeader;
