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
	console.log("genre:", genre)
	return (
			<StyledCard>
				{userId? <a className='link-user' href={`/users/${userId}`}><b>USER</b><br></br> {user}</a>: ""}
				<p><b>TITLE</b><br></br> {title}</p>
				<p><b>DATE</b><br></br> {date}</p>
				<p><b>DESCRIPTION</b><br></br> {description}</p>
				<p><b>GENRE</b><br></br> {genre}</p>
				<p><b>INSTRUMENT</b><br></br> {instrument}</p>
				<p><b>LOCATION</b><br></br> {location}</p>
				{session?.user.id === userId? <div className='buttons'>
					<StyledButton className='button-edit' onClick={onEdit} >edit</StyledButton>
					<StyledButton className='button-delete' onClick={onDelete} deleteButton="button_delete">
						delete
					</StyledButton>
				</div> : null}
			</StyledCard>
		);
	}

