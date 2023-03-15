import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function AnnouncementDetailPage() {
	const [announcementDetail, setAnnouncementDetail] = useState([]);
	const router = useRouter();

	const {id} = router.query;

	useEffect(() => {
		const fetchData = async () => {
			const announcementData = await fetch(`/api/announcements/${id}`);
			const announcement = await announcementData.json();
			setAnnouncementDetail(announcement);
		};
		fetchData().catch(console.error);
	}, [id]);
	console.log(announcementDetail);
	return (
		<div>
			<p>{announcementDetail._id}</p>
		</div>
	);
}
