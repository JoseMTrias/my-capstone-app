import Layout from '../components/Layout/Layout';
import {GlobalStyle} from '../styles';
import {SessionProvider} from "next-auth/react"
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


export default function App({
	Component,
	pageProps: { session, ...pageProps },
  }) {

	return (
	<>
		<SessionProvider session={session}>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} session={session} />
			</Layout>
		</SessionProvider>
	</>
	);
}

