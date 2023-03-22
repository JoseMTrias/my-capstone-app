import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function LoginButton() {
  const { data: session } = useSession()

  console.log("session new: ", session)
  if (session) {
    return (
      <div className="login-options">
        <a onClick={() => signOut()}>Sign out</a>
        <Link href={`/users/${session.user.id}`}>
        <img src={session.user.image} style={{borderRadius: "50px", height: "25px", width: "25px"}} ></img>
        </Link>
      </div>
    )
  }
  return (
    <>
      <a onClick={() => signIn()}>Sign in</a>
    </>
  )
}

