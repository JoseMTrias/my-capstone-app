import {useRouter} from 'next/router';
import {useState} from 'react';
import StyledButton from '../Button/styled';
import StyledEditForm from './styled';

export default function EditForm({announcement}) {
	const router = useRouter();
	const [editAnnouncement, setEditAnnouncement] = useState(announcement);

	async function handleEdit() {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let currentDate = `${year}-${month}-${day}`;

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
			<StyledEditForm onSubmit={handleEdit}>
				<label>Title:</label>
				<input
					onChange={e =>
						setEditAnnouncement({...editAnnouncement, title: e.target.value})
					}
					value={editAnnouncement.title}
					type="text"
					name="title"
					/>
				<br></br>
				<label>Instrument:</label>
				<input
					onChange={e =>
						setEditAnnouncement({...editAnnouncement, instrument: e.target.value})
					}
					value={editAnnouncement.instrument}
					type="text"
					name="instrument"
				/>
				<br></br>
				<label>Genre:</label>
				<input
					onChange={e =>
						setEditAnnouncement({...editAnnouncement, genre: e.target.value})
					}
					value={editAnnouncement.genre}
					type="text"
					name="genre"
				/>
				<br></br>
				<label>Location:</label>
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, location: e.target.value})
						}
						value={editAnnouncement.location}
						type="text"
						name="location"
					/>
				<br></br>
				<p>Description:</p>
				<textarea className='text-area'
					onChange={e =>
						setEditAnnouncement({...editAnnouncement, description: e.target.value})
					}
					type="text"
					name="description"
					value={editAnnouncement.description}
				></textarea>
				<br></br>
				<StyledButton className='button-edit' type="submit" value="Update" >Update</StyledButton>
			</StyledEditForm>
		</>
	);
}
