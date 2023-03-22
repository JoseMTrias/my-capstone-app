import StyledCard from '../../components/Card/styled'
import { useSession} from "next-auth/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'


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
          <h4>Announcements from user:</h4>
          <ul>
            {filteredAnnouncements.map((a) => (
              <li>
              <Link href={`/announcements/${a._id}`}>{a.title}</Link><br/>
              </li>
            ))}
          </ul>
        </StyledCard>
      </>
    )
  }
  return <a href='/api/auth/signin'>Sign in</a>

}
