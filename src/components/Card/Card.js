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
	session
}) {	

	console.log("session user ID: ", session.user.id)
	console.log("user ID", userId)


	return (
			<StyledCard>
				{userId? <a href={`/users/${userId}`}>User: {user}</a>: ""}
				<p>Title: {title}</p>
				<p>Date: {date}</p>
				<p>Description: {description}</p>
				<p>Genre: {genre}</p>
				<p>Instrument: {instrument}</p>
				<p>Location: {location}</p>
				{session.user.id === userId? <div className='buttons'>
					<StyledButton className='button-edit' onClick={onEdit} >edit</StyledButton>
					<StyledButton className='button-delete' onClick={onDelete} deleteButton="button_delete">
						delete
					</StyledButton>
				</div> : null}

				
				
			</StyledCard>
		);
	}

