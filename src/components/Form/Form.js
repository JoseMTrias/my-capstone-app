// import React from 'react';

import StyledForm from './styled';
export default function Form() {
	return (
		<StyledForm action="/result" method="post">
			<label htmlFor="instrument">Instrument:</label>
			<select className="select" id="instruments" name="instruments">
				<option value="all_instruments">All</option>
				<option value="guitar">Guitar</option>
				<option value="bass">Bass</option>
				<option value="drums">Drums</option>
				<option value="vocals">Vocals</option>
			</select>
			<label htmlFor="genre">Genre:</label>
			<select id="genre" name="genre">
				<option value="all_genres">All</option>
				<option value="rock">Rock</option>
				<option value="shoegaze">Shoegaze</option>
				<option value="pop">Pop</option>
				<option value="jazz">Jazz</option>
				<option value="funk">Funk</option>
				<option value="electronic">Electronic</option>
				<option value="classical">Classical</option>
			</select>
			<label htmlFor="location">Location:</label>
			<input type="text" id="location" name="location"></input>
			<button type="submit">Search</button>
		</StyledForm>
	);
}
