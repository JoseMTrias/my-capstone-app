import StyledCard from '../../components/Card/styled'
import { useSession} from "next-auth/react"
import { useState, useEffect } from 'react'


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

  console.log("filtered: ", filteredAnnouncements)

  if (status === "authenticated") {
    return (
      <>
        <StyledCard>
          <p>User: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          <ul>
            <li>{filteredAnnouncements.title}</li>
          </ul>
        </StyledCard>
      </>
    )
  }
  return <a href='/api/auth/signin'>Sign in</a>

}
