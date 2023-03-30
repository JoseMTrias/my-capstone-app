import StyledFooter from './styled';
import LoginButton from "../Button/login-btn";

export default function Footer() {
	return (
		<>
		<StyledFooter>
			<p >TheBandSeeds 2023<br></br><a className='footer-link-text' href='mailto:jmgarciatrias@gmail.com'>Contact</a></p>
			<LoginButton></LoginButton>
		</StyledFooter>
		</>
	);
}
