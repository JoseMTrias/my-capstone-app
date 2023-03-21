import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	padding: 0.8em 0.8em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	/* border-radius: ${pxToRem(4)}; */
	background: #444554;
	color: #444554;
	font-size: 0.8em;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	position: fixed;
	bottom: 0;
	width: 100%;
	-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledFooter;
