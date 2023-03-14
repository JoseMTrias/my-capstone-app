// import React from 'react';
// import {useState} from 'react';
import useSWR from 'swr';

import StyledForm from './styled';

export default function Form() {
	const announces = useSWR('/api');

	const handleSubmit = async event => {
		event.preventDefault();

		const instrument = event.target.instrument.value;
		const genre = event.target.genre.value;
		const location = event.target.location.value;
		const formData = {
			instrument,
			genre,
			location,
		};
		console.log(formData);

		const response = await fetch('/api', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			await response.json();
			announces.mutate();
			event.target.reset();
		}
	};
	return (
		<StyledForm onSubmit={handleSubmit} action="/result" method="post">
			<label htmlFor="instrument">Instrument:</label>
			<select className="select" id="instrument" name="instrument">
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
