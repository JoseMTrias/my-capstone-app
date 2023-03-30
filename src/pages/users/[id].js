import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import StyledCard from '../../components/Card/styled'
import Link from 'next/link'
import StyledButton from '../../components/Button/styled'

export default function profilePage() {
  const { data: session, status } = useSession()
  const [announcements, setAnnouncements] = useState([])
  const [user, setUser] = useState()
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    async function getAnnouncements() {
     try {
       const announcementsData = await fetch("/api/announcements")
       const announcements = await announcementsData.json()

       const filteredAnnouncements = announcements.filter((announcement) => {
        if (id === announcement.userId) {
          return announcement 
        }
      })
       setAnnouncements(filteredAnnouncements)
     } catch (error) {
       console.log(error)
     }
   }
   getAnnouncements()
  }, [id])

  useEffect(() => {
      async function getUser() {
       try {
         const usersData = await fetch(`/api/users/${id}`)
         const user = await usersData.json()
         setUser(user)
       } catch (error) {
         console.log(error)
       }
     }
     getUser()
  }, [id])

  console.log("sesssssion: ", session)
  console.log("user: ", user)


  if (user) {
    return (
      <>
        <StyledCard className='user-info'>
          <h4 className='user-info'>USER INFO</h4>
          <section className='user-email'>
          <p>{user.name} </p>
          <a href={`mailto:${user.email}`} className="email-link">Contact</a>
          </section>
          <br></br>
          {session?.user.id === user._id? 
          <StyledButton  className='sign-out' onClick={() => signOut()}>sign out</StyledButton> : null}
            </StyledCard>
          <StyledCard>
          <h4>USER ANNOUNCEMENTS</h4>
          <ul className='user-announcements-ul'>
            {announcements.map((a) => (
              <li>
              <Link href={`/announcements/${a._id}`}>{a.title}</Link><br/>
              </li>
            ))}
            <br></br>
          </ul>
          {session?.user.id === user._id? 
          <StyledButton className='create-new'>
            <Link  href="/offer">create new</Link> 
          </StyledButton> : null}
          </StyledCard>
      </>
    )
  }
  return <StyledButton className='sign-out' >
          <a href='/api/auth/signin'>sign in</a>
        </StyledButton>

}
