import React from 'react'
import { useSession} from "next-auth/react"
import StyledCard from '../../components/Card/styled'


export default function profilePage() {
  const { data: session, status } = useSession()
  if (status === "authenticated") {

    return (
      <>
        <StyledCard>
          <p>hi</p>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
        </StyledCard>
      </>
    )
  }
  return <a href='/api/auth/signin'>Sign in</a>

}
