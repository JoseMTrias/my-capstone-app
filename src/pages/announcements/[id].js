import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import Card from '../../components/Card/Card';
import EditForm from '../../components/EditForm/EditForm';
export default function AnnouncementDetailPage() {
	const [announcementDetail, setAnnouncementDetail] = useState([]);
	const router = useRouter();
	const {id} = router.query;
	const [showForm, setShowForm] = useState(false);

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
		router.push('/search');
	}

	return (
		<div>
			<h3>Announcement Profile:</h3>
			<Card
				id={announcementDetail._id}
				date={announcementDetail.date}
				description={announcementDetail.description}
				genre={announcementDetail.genre}
				instrument={announcementDetail.instrument}
				location={announcementDetail.location}
				title={announcementDetail.title}
				user={announcementDetail.user}
				onEdit={() => setShowForm(!showForm)}
				onDelete={handleDeleteAnnouncement}
			></Card>
			{showForm && <EditForm announcement={announcementDetail} />}
			<br></br>
			<br></br>
		</div>
	);
}
