import {useState} from 'react';

import Card from '../Card/Card';

import StyledForm from './styled';

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
			<StyledForm onSubmit={handleSubmit} action="/result" method="post">
				<label htmlFor="instrument">Instrument:</label>
				<select className="select" id="instrument" name="instrument">
					<option value="All">All</option>
					<option value="Guitar">Guitar</option>
					<option value="Bass">Bass</option>
					<option value="Drums">Drums</option>
					<option value="Vocals">Vocals</option>
				</select>
				<label htmlFor="genre">Genre:</label>
				<select id="genre" name="genre">
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
				<input type="text" id="location" name="location"></input>
				<button type="submit">Search</button>
			</StyledForm>
			{announcements.map(announcement => {
				if (
					announcement.instrument === formInfo.instrument ||
					announcement.genre === formInfo.genre ||
					announcement.location === formInfo.location
				) {
					return (
						<Card
							key={announcement._id}
							title={announcement.title}
							// date={announcement.date}
							// instrument={announcement.instrument}
							// genre={announcement.genre}
							// location={announcement.location}
							// user={announcement.user}
							// description={announcement.description}
						></Card>
					);
				}
			})}
			{formInfo.instrument === 'All' &&
				formInfo.genre === 'All' &&
				announcements.map(announcement => {
					{
						return (
							<Card
								key={announcement._id}
								title={announcement.title}
								// date={announcement.date}
								// instrument={announcement.instrument}
								// genre={announcement.genre}
								// location={announcement.location}
								// user={announcement.user}
								// description={announcement.description}
							></Card>
						);
					}
				})}
		</>
	);
}
