import { useSession, signIn, signOut } from "next-auth/react"
import StyledButton from "./Button/styled"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="login-options">
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
        <img src={session.user.image} style={{borderRadius: "50px", height: "25px", width: "25px"}}></img>
      </div>
    )
  }
  return (
    <>
      <StyledButton onClick={() => signIn()}>Sign in</StyledButton>
    </>
  )
}