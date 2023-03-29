import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import {GlobalStyle} from '../../styles';


export default function Layout({children}) {
	return (
		<>
		<Header />
			<main className='main-test'>{children}</main>
		<Footer />
		</>
	);
}
