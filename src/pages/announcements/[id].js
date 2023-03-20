import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
// import useSWRMutation from 'swr/mutation';

import Card from '../../components/Card/Card';
import EditForm from '../../components/EditForm/EditForm';
export default function AnnouncementDetailPage() {
	const [announcementDetail, setAnnouncementDetail] = useState([]);
	const router = useRouter();
	const {id} = router.query;
	// const {push} = useRouter();
	const [showForm, setShowForm] = useState(false);

	// async function updateAnnouncement(url, {arg}) {
	// 	const response = await fetch(url, {
	// 		method: 'PUT',
	// 		body: JSON.stringify(arg),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	});
	// 	if (response.ok) {
	// 		await response.json();
	// 	} else {
	// 		console.error(`Error: ${response.status}`);
	// 	}
	// }

	// const {trigger, isMutating} = useSWRMutation(`/api/announcements/${id}`, updateAnnouncement);

	// async function handleEditAnnouncement(event) {
	// 	event.preventDefault();
	// 	const announcement = new FormData(event.target);
	// 	const announcementData = Object.fromEntries(announcement);
	// 	await trigger(announcementData);
	// 	push('/search');
	// }

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

	// if (isMutating) return <p>Submitting changes</p>;

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
