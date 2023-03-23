import Link from 'next/link';
import LogoApp from "../../../public/logofinal.png"
import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';
import StyledHeader from './styled';
import LoginButton from '../Button/login-btn';

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
        				<a href="/search">Search</a>
       					<a href="/about">About</a>
						   

      				</div>
    			</li>
			</Dropdown>
				<Link href="/" >
					<Image className='header-logo' src={LogoApp} height="75px" width="150px"/>
				</Link>


		</StyledHeader>
	);
}
