import styled from 'styled-components';

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

	div {
		width: 22px;
		height: 3px;
		background-color: #303030;
		margin: 4px 0;
		border-radius: 2px;
	}
`;

export default StyledHeader;
