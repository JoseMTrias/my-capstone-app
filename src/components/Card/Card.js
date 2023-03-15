import Link from 'next/link';

import StyledCard from './styled';

export default function Card({title}) {
	return (
		<StyledCard>
			<ul>
				<li>
					<Link href="">{title}</Link>
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
