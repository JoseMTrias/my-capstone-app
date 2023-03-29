import styled from 'styled-components';

const StyledButton = styled.button`

	border-radius: 2px;

	.search-button {
		
		margin: 0px 2px 2px 6px;
		border-color: gray;
		background-color: white;
		color: black;
		font-size: 0.8em;
	}

	&.sign-out {
		margin: 0px 2px 2px 6px;
		border: #f4e158 1px solid;
		background-color: #f4e158;
		color: black;
		font-size: 0.8em;
		width: 55px;
		display: flex;
	}

	&.create-new {
		margin: 0px 2px 2px 6px;
		background-color: #f4e158;
		border: #f4e158 1px solid;
		color: black;
		font-size: 0.8em;
		width: 70px;
	}

	.login-options {
		display: flex;
	}

	.buttons {
	display: flex;
    flex-direction: row;
    justify-content: flex-end;
	}

	&.button-delete {
		margin: 0px 2px 2px 6px;
		background-color: #f4e158;
		border: #f4e158 1px solid;
		color: black;
		font-size: 0.8em;
	}
	&.button-edit {
		margin: 0px 2px 2px 6px;
		background-color: #f4e158;
		border: #f4e158 1px solid;
		color: black;
		font-size: 0.8em;
		width: 50px;
	}
	&:hover {
		/* background: #d8b; */
	}

	&:active {
		/* background: #bad; */
	}
`;

export default StyledButton;
