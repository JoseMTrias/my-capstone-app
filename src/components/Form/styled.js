import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	align-content: center;
	gap: 0.5rem;
	margin-top: 0;
	padding: 20px 0 50px 0;
	font-family: Helvetica;
	font-size: small;

	.search-button {
		background-color: #93A8AC;
		margin-top: 20px;
		width: 120px;
		height: 25px;
		font-size: small;
	}
`;

export default StyledForm;
