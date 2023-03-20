import {useRouter} from 'next/router';
import {useState} from 'react';

export default function EditForm({announcement}) {
	const router = useRouter();
	const [editAnnouncement, setEditAnnouncement] = useState(announcement);
	// useEffect(()=> {

	// })

	async function handleEdit() {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let currentDate = `${year}-${month}-${day}`;

		console.log('announcementData: ', editAnnouncement);

		const response = await fetch(`/api/announcements/${editAnnouncement._id}`, {
			method: 'PUT',
			body: JSON.stringify({...editAnnouncement, date: currentDate}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			await response.json();
			router.push(`/announcements/${announcement._id}`);
		} else {
			console.error(`Error: ${response.status}`);
		}
	}

	return (
		<>
			<form onSubmit={handleEdit}>
				<label>
					Title:
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, title: e.target.value})
						}
						value={editAnnouncement.title}
						type="text"
						name="title"
					/>
				</label>
				<br></br>
				<label>
					Instrument:
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, instrument: e.target.value})
						}
						value={editAnnouncement.instrument}
						type="text"
						name="instrument"
					/>
				</label>
				<br></br>
				<label>
					Genre:
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, genre: e.target.value})
						}
						value={editAnnouncement.genre}
						type="text"
						name="genre"
					/>
				</label>
				<br></br>
				<label>
					Location:
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, location: e.target.value})
						}
						value={editAnnouncement.location}
						type="text"
						name="location"
					/>
				</label>
				<br></br>
				<label>
					User:
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, user: e.target.value})
						}
						value={editAnnouncement.user}
						type="text"
						name="user"
					/>
				</label>
				<p>Description:</p>
				<textarea
					onChange={e =>
						setEditAnnouncement({...editAnnouncement, description: e.target.value})
					}
					type="text"
					name="description"
					value={editAnnouncement.description}
				></textarea>
				<br></br>
				<input type="submit" value="Update" />
			</form>
		</>
	);
}
