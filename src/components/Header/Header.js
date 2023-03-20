import Link from 'next/link';
import LoginButton from '../login-btn';

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
				<LoginButton></LoginButton>
			</nav>
		</StyledHeader>
	);
}
