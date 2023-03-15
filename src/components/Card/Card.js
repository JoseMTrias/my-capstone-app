import StyledCard from './styled';

export default function Card({title, date, instrument, genre, location, user, description}) {
	return (
		<StyledCard>
			<p>Title: {title}</p>
			<p>Date: {date}</p>
			<p>
				Instrument / Genre: {instrument} / {genre}
			</p>
			<p>Location: {location}</p>
			<p>User: {user}</p>
			<p>Description:</p>
			<p>{description}</p>
		</StyledCard>
	);
}
