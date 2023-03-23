import StyledCard from '../../components/Card/styled'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoginButton from '../../components/Button/login-btn'
import { useSession, signIn, signOut } from "next-auth/react"



export default function profilePage() {
  const { data: session, status } = useSession()
  const [announcements, setAnnouncements] = useState([])
  
  useEffect(() => {
    async function getAnnouncements() {
     try {
       const announcementsData = await fetch("/api/announcements")
       const announcements = await announcementsData.json()
       setAnnouncements(announcements)
     } catch (error) {
       console.log(error)
     }
   }
   getAnnouncements()
  }, [])

    const filteredAnnouncements = announcements.filter((announcement) => {
      if (session?.user.id === announcement.userId) {
        return announcement 
      }
    })

  if (status === "authenticated") {
    return (
      <>
        <StyledCard>
          <p>User: {session.user.name} Email: {session.user.email}</p>
          <a onClick={() => signOut()}>Sign out</a>
          <h4>User announcements:</h4>
          <ul>
            {filteredAnnouncements.map((a) => (
              <li>
              <Link href={`/announcements/${a._id}`}>{a.title}</Link><br/>
              </li>
            ))}
          </ul>
        <Link href="/offer"> Create new</Link> 
        </StyledCard>
      </>
    )
  }
  return <a href='/api/auth/signin'>Sign in</a>

}
