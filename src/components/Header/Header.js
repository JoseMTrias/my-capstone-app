import Link from 'next/link';
import LogoApp from "../../../public/logofinal.png"
import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';
import StyledHeader from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<Dropdown>
    			<li className="dropdown">
      				<a href="#" className="dropbtn">
						<div></div>
						<div></div>
						<div></div>
					</a>
      				<div className="dropdown-content">
        				<a href="/search">SEARCH</a>
						<a href="/map">LOCATIONS</a>

       					<a href="/about">ABOUT</a>
      				</div>
    			</li>
			</Dropdown>
				<Link href="/" >
					<Image alt='The Band Seeds Logo' className='header-logo' src={LogoApp} height="75px" width="150px"/>
				</Link>
		</StyledHeader>
	);
}
