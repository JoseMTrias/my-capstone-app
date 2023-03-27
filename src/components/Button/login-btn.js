import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import StyledButton from "./styled"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="login-options">
        <Link href={`/users/${session.user.id}`}>
        <img src={session.user.image} style={{borderRadius: "50px", height: "35px", width: "35px"}} ></img>
        </Link>
        <br></br>
        {/* <a onClick={() => signOut()}>Sign out</a> */}
      </div>
    )
  }
  return (
    <>
      <StyledButton className="sign-out" onClick={() => signIn()}>sign in</StyledButton>
    </>
  )
}

