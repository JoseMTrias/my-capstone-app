import Link from 'next/link';
import LoginButton from '../Button/login-btn';
import LogoApp from "../../../public/logofinal.png"
import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';

import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<div className='title-text'>
				<Link href="/" >
					<Image className='header-logo' src={LogoApp} height="75px" width="150px"/>
				</Link>
			</div>
			{/* <nav>
				<LoginButton></LoginButton>
			</nav> */}
			<Dropdown></Dropdown>
		</StyledHeader>
	);
}
