import Layout from '../components/Layout/Layout';
import {GlobalStyle} from '../styles';
import {SessionProvider} from "next-auth/react"

export default function App({
	Component,
	pageProps: { session, ...pageProps },
  }) {	
	return (
	<>
		<SessionProvider session={session}>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	
	</>
		
	);
}
