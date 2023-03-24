import Button from '../Button';
import StyledCard from './styled';
import StyledButton from '../Button/styled';

export default function Card({
	date,
	description,
	genre,
	instrument,
	location,
	title,
	user,
	userId,
	onEdit,
	onDelete,
}) {	

	return (
			<StyledCard>
				{userId? <a href={`/users/${userId}`}>User: {user}</a>: ""}
				<p>Title: {title}</p>
				<p>Date: {date}</p>
				<p>Description: {description}</p>
				<p>Genre: {genre}</p>
				<p>Instrument: {instrument}</p>
				<p>Location: {location}</p>
				<div className='buttons'>
					<StyledButton className='button-edit' onClick={onEdit} >edit</StyledButton>
					<StyledButton className='button-delete' onClick={onDelete} deleteButton="button_delete">
						delete
					</StyledButton>
				</div>
			</StyledCard>
		);
	}

