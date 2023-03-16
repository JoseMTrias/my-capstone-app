import Link from 'next/link';

import StyledBoard from './styled';

export default function Board({title, id}) {
	return (
		<StyledBoard>
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
		</StyledBoard>
	);
}
