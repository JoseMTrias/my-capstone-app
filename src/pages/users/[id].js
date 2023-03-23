import StyledCard from '../../components/Card/styled'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoginButton from '../../components/Button/login-btn'
import { useSession, signIn, signOut } from "next-auth/react"
import StyledButton from '../../components/Button/styled'
import Button from '../../components/Button'


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
        <StyledCard className='user-info'>
        <h4 className='user-info'>USER INFO</h4>

          <section className='user-email'>
          <p>{session.user.name} </p>
          <p>{session.user.email}</p>
          </section>
          <br></br>
            <StyledButton  className='sign-out' onClick={() => signOut()}>sign out</StyledButton>
            </StyledCard>
          <br></br>
          <StyledCard>

          <h4>USER ANNOUNCEMENTS</h4>
          <ul className='user-announcements-ul'>
            {filteredAnnouncements.map((a) => (
              <li>
              <Link href={`/announcements/${a._id}`}>{a.title}</Link><br/>
              </li>
            ))}
            <br></br>
          </ul>
        <StyledButton className='create-new' href="/offer"> create new</StyledButton> 
          </StyledCard>
      </>
    )
  }
  return <a href='/api/auth/signin'>Sign in</a>

}
