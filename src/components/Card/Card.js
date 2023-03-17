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
	onDelete,
}) {
	return (
		<StyledCard>
			{/* <p>{id}</p> */}
			<p>{title}</p>
			<p>{date}</p>
			<p>{description}</p>
			<p>{genre}</p>
			<p>{instrument}</p>
			<p>{location}</p>
			<p>{user}</p>
			<div className="buttons">
				<Button>Update</Button>
				<Button onClick={onDelete} deleteButton="button_delete">
					Delete
				</Button>
			</div>
		</StyledCard>
	);
}
