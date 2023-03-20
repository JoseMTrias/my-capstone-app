import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    console.log(session)
    return (
      <>
         
        <button onClick={() => signOut()}>Sign out</button>
        <img src={session.user.image} style={{borderRadius: "50px", height: "40px", width: "40px"}}></img>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}