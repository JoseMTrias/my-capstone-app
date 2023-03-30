import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import StyledButton from "./styled"
import Image from "next/image"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="login-options">
        <Link href={`/users/${session.user.id}`}>
          <Image width={35} height={35} alt={`${session.user.name}&apos;s profile photo`} src={session.user.image} style={{borderRadius: "50px"}} ></Image>
        </Link>
        <br></br>
      </div>
    )
  }
  return (
    <>
      <StyledButton className="sign-out" onClick={() => signIn()}>sign in</StyledButton>
    </>
  )
}

