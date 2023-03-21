import Button from '../Button';

import StyledCard from './styled';

export default function Card({
	date,
	description,
	genre,
	instrument,
	location,
	title,
	user,
	onEdit,
	onDelete,
}) {
	return (
		<StyledCard>
			<p>Title: {title}</p>
			<p>Date: {date}</p>
			<p>Description: {description}</p>
			<p>Genre: {genre}</p>
			<p>Instrument: {instrument}</p>
			<p>Location: {location}</p>
			<p>User: {user}</p>
			<div className="buttons">
				<Button onClick={onEdit}>Edit</Button>
				<Button onClick={onDelete} deleteButton="button_delete">
					Delete
				</Button>
			</div>
		</StyledCard>
	);
}
