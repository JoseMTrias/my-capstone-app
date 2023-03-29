import styled from 'styled-components';

const StyledCard = styled.article`
	font-size: 0.8rem;
	padding: 16px 32px 16px;
	height: 90%;
	margin-bottom: 1.5em;
	margin-top: 2.5em;
	color: black;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	box-shadow: 10px 10px 0px 0px #f4e158, -40px 37px 0px 30px rgba(0,0,0,0);
	background-color: white;
	opacity: 95%;
	
	.buttons {
		display: flex;
    	flex-direction: row;
    	justify-content: flex-end;
	}
	.user_profile {
		text-decoration: underline;
	}

	a {
		color: black;
		padding-bottom: 10px;
	}

	.user-info {
		margin-bottom: 0;
	}
	
	.user-email {
		border-bottom: 1px solid #f4e158;
		right: 0;
	}

	.user-announcements-ul {
		margin: 0 0 20px 0;
		border-bottom: 1px solid #f4e158;
	}

	.link-user {
		text-decoration: underline;
	}
`;

export default StyledCard;
