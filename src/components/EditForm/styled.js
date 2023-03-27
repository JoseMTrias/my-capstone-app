import styled from 'styled-components';

const StyledEditForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 0;
	font-family: Helvetica;
	font-size: small;
	padding: 16px 32px 16px;
	margin-bottom: 1.5em;
	border: 1px solid black;
	box-shadow: 10px 10px 0px 0px #f4e158, -40px 37px 0px 30px rgba(0,0,0,0);

	.button-create {
		background-color: white;
		margin: 10px auto;
		width: 100px;
		height: 25px;
		font-size: small;
		border: 2px solid #f4e158;
	}

	.text-area {
		height: 100px;
	}
`;

export default StyledEditForm;
