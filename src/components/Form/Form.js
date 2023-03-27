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
		setAnnouncements(allAnnouncements);
	};
	return (
		<>
			<StyledForm onSubmit={handleSubmit} className="search-form" action="/result" method="post">
				<label htmlFor="instrument">Instrument:</label>
				<select className="select" id="instrument" name="instrument" >
					<option value="All">All</option>
					<option value="Guitar">Guitar</option>
					<option value="Bass">Bass</option>
					<option value="Drums">Drums</option>
					<option value="Vocals">Vocals</option>
				</select>
				<label htmlFor="genre">Genre:</label>
				<select className="select" id="genre" name="genre">
					<option value="All">All</option>
					<option value="Rock">Rock</option>
					<option value="Shoegaze">Shoegaze</option>
					<option value="Pop">Pop</option>
					<option value="Jazz">Jazz</option>
					<option value="Funk">Funk</option>
					<option value="Electronic">Electronic</option>
					<option value="Classical">Classical</option>
				</select>
				<label htmlFor="Location">Location:</label>
				<input className="select" type="text" id="location" name="location" placeholder='Enter City'></input>
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
			{formInfo.instrument === 'All' &&
				formInfo.genre === 'All' &&
				announcements.map(announcement => {
					{
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
