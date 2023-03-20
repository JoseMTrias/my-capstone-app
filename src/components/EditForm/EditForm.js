import {useRouter} from 'next/router';
import {useState} from 'react';
import useSWR from 'swr';

export default function EditForm({announcement}) {
	const router = useRouter();
	const [editAnnouncement, setEditAnnouncement] = useState(announcement);
	const announcements = useSWR('/api/announcements');
	console.log(setEditAnnouncement);
	async function handleSubmit(event) {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let currentDate = `${year}-${month}-${day}`;

		event.preventDefault();

		const formData = new FormData(event.target);
		const announcementData = Object.fromEntries(formData);

		const response = await fetch('api/announcements', {
			method: 'POST',
			body: JSON.stringify({...announcementData, date: currentDate}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const announcement = await response.json();
			announcements.mutate();
			router.push(`/announcements/${announcement._id}`);
		} else {
			console.error(`Error: ${response.status}`);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input type="text" name="title" value={editAnnouncement.title} />
				</label>
				<br></br>
				<label>
					Instrument:
					<input value={editAnnouncement.instrument} type="text" name="instrument" />
				</label>
				<br></br>
				<label>
					Genre:
					<input value={editAnnouncement.genre} type="text" name="genre" />
				</label>
				<br></br>
				<label>
					Location:
					<input value={editAnnouncement.location} type="text" name="location" />
				</label>
				<br></br>
				<label>
					User:
					<input value={editAnnouncement.user} type="text" name="user" />
				</label>
				<p>Description:</p>
				<textarea
					type="text"
					name="description"
					value={editAnnouncement.description}
				></textarea>
				<br></br>
				<input type="submit" value="Create" />
			</form>
		</>
	);
}
