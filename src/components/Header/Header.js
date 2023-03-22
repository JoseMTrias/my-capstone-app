import Link from 'next/link';
import LoginButton from '../login-btn';
import LogoApp from "../../../public/logo-final.png"
import Image from 'next/image';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<h2 className='title-text'>
				<Link href="/" >
					<Image className='header-logo' src={LogoApp} height="120px" width="120px"/>
				</Link>
			</h2>
			<nav>
				<LoginButton></LoginButton>
			</nav>
		</StyledHeader>
	);
}
