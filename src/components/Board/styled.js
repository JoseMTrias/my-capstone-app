import styled from 'styled-components';

const StyledBoard = styled.article`
	font-size: 0.8rem;
	padding-bottom: 0 20px;
	color: black;
	border: 1px solid black;
	background-color: white;
	box-shadow: 3px 3px 0px 0px #f4e158, -40px 37px 0px 30px rgba(0,0,0,0);

	ul {
    list-style-type: square;
	display: flex;
	align-items: center;
	border-color: lightgray;
	border-radius: 5px;
	background-color: white;
	/* list-style-type: none; */
	}

	a {
		color: black;
	}

	/* .link-announcements {
		display: flex;
		align-items: center;
	} */
`;

export default StyledBoard;
