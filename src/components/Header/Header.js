import Link from 'next/link';
import LoginButton from '../login-btn';
import LogoApp from "../../../public/logo.png"
import Image from 'next/image';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<h2 >
				<Link href="/" className='title-text'>
					BandSeeds
				</Link>
			</h2>
			<nav>
				<LoginButton></LoginButton>
			</nav>
		</StyledHeader>
	);
}
