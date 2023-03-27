import Link from 'next/link';
import StyledBoard from './styled';

export default function Board({title, id}) {
	return (
		<StyledBoard>
			<ul>
				<li>
					<Link className='link-announcements' href={`/announcements/${id}`}>{title}</Link>
				</li>
			</ul>
		</StyledBoard>
	);
}
