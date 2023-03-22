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
				<p>User: {user}</p>
				<p>Title: {title}</p>
				<p>Date: {date}</p>
				<p>Description: {description}</p>
				<p>Genre: {genre}</p>
				<p>Instrument: {instrument}</p>
				<p>Location: {location}</p>
				<div className='buttons'>
					<Button className='button_edit' onClick={onEdit} >Edit</Button>
					<Button onClick={onDelete} deleteButton="button_delete">
						Delete
					</Button>
				</div>
			</StyledCard>
		);
	}

