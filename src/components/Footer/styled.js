import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	padding: 0.8em 0.8em;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	/* border-radius: ${pxToRem(4)}; */
	background-color: black;
	color: white;
	font-size: 0.8em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	position: fixed;
	bottom: 0;
	width: 100%;
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledFooter;
