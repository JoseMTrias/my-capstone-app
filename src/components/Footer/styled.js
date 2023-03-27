import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: 0.8em 0.8em;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	background-color: black;
	color: white;
	font-size: 0.8em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
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
