import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: center;
	gap: 0.5rem;
	margin-top: 0;
	padding: 10px 0 10px 0;
	font-family: Helvetica;
	font-size: small;

	.search-button {
		background-color: white;
		margin: 10px auto;
		width: 100px;
		height: 25px;
		font-size: small;
		border: 2px solid #f4e158;
	}

	.select {
		padding: 8px 8px;
  		border: 2px solid black;
  		border-radius: 2px;
	}
`;

export default StyledForm;
