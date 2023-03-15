import {useRouter} from 'next/router';

export default function AnnouncementDetailPage() {
	const router = useRouter();

	const {id} = router.query;
	console.log(id);

	return <h1>details page</h1>;
}
