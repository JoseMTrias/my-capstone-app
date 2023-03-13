import Link from 'next/link';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<nav>
				<Link href="/">
					<h1>Music-App</h1>
				</Link>
			</nav>
			<nav>
				<Link href="/about">
					<h1>About</h1>
				</Link>
			</nav>
		</StyledHeader>
	);
}
