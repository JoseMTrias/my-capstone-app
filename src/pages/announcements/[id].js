import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import Error from 'next/error';
import Card from '../../components/Card/Card';
import EditForm from '../../components/EditForm/EditForm';

export default function AnnouncementDetailPage() {
	const [announcementDetail, setAnnouncementDetail] = useState();
	const router = useRouter();
	const {id} = router.query;
	const [showForm, setShowForm] = useState(false);
	const { data: session, status } = useSession()

	useEffect(() => {
		const fetchData = async () => {
			const announcementData = await fetch(`/api/announcements/${id}`);
			const announcement = await announcementData.json();
			setAnnouncementDetail(announcement);
		};
		fetchData().catch(console.error);
	}, [id]);

	async function handleDeleteAnnouncement() {
		await fetch(`/api/announcements/${id}`, {
			method: 'DELETE',
		});
		alert("Announcement succesfully deleted!")
		router.push(`/users/${announcementDetail.userId}`);
	}

	if(!announcementDetail) {
		return <p>Loading...</p>
	}

	return (
		<div >
			<h4 className='ad-profile-header'>ANNOUNCEMENT PROFILE</h4>
			<Card
				id={announcementDetail._id}
				date={announcementDetail.date}
				description={announcementDetail.description}
				genre={announcementDetail.genre}
				instrument={announcementDetail.instrument}
				location={announcementDetail.location}
				title={announcementDetail.title}
				user={announcementDetail.user}
				userId={announcementDetail.userId}
				onEdit={() => setShowForm(!showForm)}
				onDelete={handleDeleteAnnouncement}
				session={session}
			></Card>
			{showForm && <EditForm announcement={announcementDetail} />}
			<br></br>
		</div>
	);
}
