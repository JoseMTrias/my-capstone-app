import Link from 'next/link';

import StyledCard from './styled';

export default function Card({title, id}) {
	return (
		<StyledCard>
			<ul>
				<li>
					<Link href={`/announcements/${id}`}>{title}</Link>
				</li>
			</ul>
			{/* <p>Date: {date}</p>
			<p>
				Instrument / Genre: {instrument} / {genre}
			</p>
			<p>Location: {location}</p>
			<p>User: {user}</p>
			<p>Description:</p>
			<p>{description}</p> */}
		</StyledCard>
	);
}
