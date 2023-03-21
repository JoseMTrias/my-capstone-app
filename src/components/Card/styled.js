import styled from 'styled-components';

const StyledCard = styled.article`
	font-size: 0.8rem;
	padding: 1rem 2rem;
	margin-bottom: 1.5em;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 3px 13px -10px #000000, 1px 21px 9px 30px rgba(0,0,0,0);
	
	.buttons {
		display: flex;
		justify-content: end;
		font-size: medium;
		margin-top: 20px;
		
	}
`;

export default StyledCard;
