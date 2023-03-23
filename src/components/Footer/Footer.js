import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useState } from 'react';
import StyledFooter from './styled';
import Link from 'next/link';
import LoginButton from "../Button/login-btn";

export default function Footer() {
	return (
		<>
		<StyledFooter>
			<p>TheBandSeeds 2023</p>
			{/* <Link href="/" >Home</Link>
			<Link href="/search">Search</Link> */}
		 	{/* <Link href="/offer"> Create</Link>  */}
			<LoginButton></LoginButton>
		</StyledFooter>
		</>
	);
}
