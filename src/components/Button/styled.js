import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`

	&.search-button {

		margin: 0px 2px 2px 6px;
		border-radius: ${pxToRem(4)};
		background: #93A8AC;
		color: #FFFD82;
		font-size: 0.8em;
	}

	.login-options {
		display: flex;
		
	}

	&.button_delete {
		font-size: small;
	}
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledButton;
