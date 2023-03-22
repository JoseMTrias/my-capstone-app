import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledFooter = styled.footer`
	padding: 0.8em 0.8em;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	/* border-radius: ${pxToRem(4)}; */
	background-color: white;
	color: #444554;
	font-size: 0.8em;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
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
