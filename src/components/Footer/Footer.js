import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useState } from 'react';
import StyledFooter from './styled';
import Link from 'next/link';
import Image from 'next/image';
import logoHomeFilled from "../../../public/home-filled.svg"
import logoHomeEmpty from "../../../public/home-empty.svg"
import logoSearchFilled from "../../../public/search-filled.svg"
import logoSearchEmpty from "../../../public/search-empty.svg"
import logoCreateFilled from "../../../public/create-filled.svg"
import logoCreateEmpty from "../../../public/create-empty.svg"

export default function Footer() {
	const { data: session } = useSession()
	const router = useRouter()
	const [isActive, setIsActive] = useState("Home")
	return (
		<>
		<StyledFooter>
			<Link href="/" >
				{
					isActive === "Home" ? <Image onClick={()=> {setIsActive("Home")}} alt='home-filled' src={logoHomeFilled} height="25px" width="25px" /> : <Image onClick={()=> {setIsActive("Home")}} alt='home-filled' src={logoHomeEmpty} height="25px" width="25px" />
				}
			</Link>
			<Link href="/search">
				{
					isActive === "Search" ? <Image onClick={()=> {setIsActive("Search")}} alt='serach-filled' src={logoSearchFilled} height="25px" width="25px" /> : <Image onClick={()=> {setIsActive("Search")}} alt='search-filled' src={logoSearchEmpty} height="25px" width="25px" />
				}
				</Link>
			{
			session && <Link href="/offer"> 
			{
			isActive === "Create" ? <Image onClick={()=> {setIsActive("Create")}} alt='create-filled' src={logoCreateFilled} height="25px" width="25px" /> : <Image onClick={()=> {setIsActive("Create")}} alt='create-filled' src={logoCreateEmpty} height="25px" width="25px" />
			}
			</Link> 
			}		
		</StyledFooter>
		</>
	);
}
