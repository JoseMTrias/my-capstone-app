import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`

	.search-button {

		margin: 0px 2px 2px 6px;
		border-color: gray;
		background-color: white;
		color: black;
		font-size: 0.8em;
	}

	.login-options {
		display: flex;
	}

	.buttons {
	display: flex;
    flex-direction: row;
    justify-content: flex-end;
	}

	&.button_delete {
		font-size: small;
		margin: 0px 2px 2px 6px;
		border-radius: ${pxToRem(4)};
		background: #93A8AC;
		color: #FFFD82;
		font-size: 0.8em;	
	}
	&.button_edit {
		margin: 0px 2px 2px 6px;
		border-radius: ${pxToRem(4)};
		background: #93A8AC;
		color: #FFFD82;
		font-size: 0.7em;
		display: flex;
		justify-content: flex-end;
	}
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledButton;
