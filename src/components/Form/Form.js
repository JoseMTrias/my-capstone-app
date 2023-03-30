import {useState} from 'react';
import Button from '../Button';
import Board from '../Board/Board';

import StyledForm from './styled';
import StyledButton from '../Button/styled';

export default function Form() {
	const [announcements, setAnnouncements] = useState([]);
	const [formInfo, setFormInfo] = useState({});
	const handleSubmit = async event => {
		event.preventDefault();

		const instrument = event.target.instrument.value;
		const genre = event.target.genre.value;
		const location = event.target.location.value;
		setFormInfo({
			instrument,
			genre,
			location,
		});

		const response = await fetch('/api/announcements');
		const allAnnouncements = await response.json();
		const sortedAnnouncements = allAnnouncements.sort(function (a, b) {
			return (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0);
		  });
		setAnnouncements(sortedAnnouncements);
	};

	

	return (
		<>
			<StyledForm onSubmit={handleSubmit} className="search-form" action="/result" method="post">
				<label htmlFor="instrument">INSTRUMENT</label>
				<select className="select" id="instrument" name="instrument" >
					<option disabled selected value> -- select an option -- </option>
					<option value="Guitar">Guitar</option>
					<option value="Bass">Bass</option>
					<option value="Drums">Drums</option>
					<option value="Vocals">Vocals</option>
				</select>
				<label htmlFor="genre">GENRE</label>
				<select className="select" id="genre" name="genre">
					<option disabled selected value> -- select an option -- </option>
					<option value="Rock">Rock</option>
					<option value="Shoegaze">Shoegaze</option>
					<option value="Pop">Pop</option>
					<option value="Jazz">Jazz</option>
					<option value="Funk">Funk</option>
					<option value="Electronic">Electronic</option>
					<option value="Classical">Classical</option>
				</select>
				<label htmlFor="Location">LOCATION</label>
				<select className="select" id="location" name="location">
					<option disabled selected value> -- select an option -- </option>
					<option value="Berlin">Berlin</option>
				</select>
				<br></br>

				<StyledButton type="submit" className="search-button">search</StyledButton>
			</StyledForm>
			{announcements.map(announcement => {
				if (
					announcement.instrument === formInfo.instrument &&
					announcement.genre === formInfo.genre &&
					announcement.location === formInfo.location
				) {
					return (
						<Board
							key={announcement._id}
							title={announcement.title}
							id={announcement._id}
						></Board>
					);
				} 
			})}
		</>
	);
}
