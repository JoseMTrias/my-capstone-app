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
			alert("Announcement succesfully edited!")
			router.push(`/announcements/${announcement._id}`);
		} else {
			console.error(`Error: ${response.status}`);
		}
	}

	if(!response) {
		return <p>Loading...</p>
	}
	else {
		return (
			<>
				<StyledEditForm onSubmit={handleEdit}>
					<label>TITLE</label>
					<input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, title: e.target.value})
						}
						value={editAnnouncement.title}
						type="text"
						name="title"
						/>
					<br></br>
					<label>INSTRUMENT</label>
					<select className="select" id="instrument" name="instrument" onChange={e =>
							setEditAnnouncement({...editAnnouncement, instrument: e.target.value})
						} 					value={editAnnouncement.instrument}
						>
						<option disabled selected value> -- select an option -- </option>
						<option value="Guitar">Guitar</option>
						<option value="Bass">Bass</option>
						<option value="Drums">Drums</option>
						<option value="Vocals">Vocals</option>
					</select>
					{/* <input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, instrument: e.target.value})
						}
						value={editAnnouncement.instrument}
						type="text"
						name="instrument"
					/> */}
					<br></br>
					<label>GENRE</label>
					<select className="select" id="genre" name="genre" onChange={e =>
							setEditAnnouncement({...editAnnouncement, genre: e.target.value})
						} 					value={editAnnouncement.genre}
						>
						<option disabled selected value> -- select an option -- </option>
						<option value="Rock">Rock</option>
						<option value="Shoegaze">Shoegaze</option>
						<option value="Pop">Pop</option>
						<option value="Jazz">Jazz</option>
						<option value="Funk">Funk</option>
						<option value="Electronic">Electronic</option>
						<option value="Classical">Classical</option>
					</select>
					{/* <input
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, genre: e.target.value})
						}
						value={editAnnouncement.genre}
						type="text"
						name="genre"
					/> */}
					<br></br>
					<label>LOCATION</label>
					<select className="select" id="genre" name="genre" onChange={e =>
								setEditAnnouncement({...editAnnouncement, location: e.target.value})
							} 						value={editAnnouncement.location}
							>
						<option disabled selected value> -- select an option -- </option>
						<option value="Berlin">Berlin</option>
					</select>
						{/* <input
							onChange={e =>
								setEditAnnouncement({...editAnnouncement, location: e.target.value})
							}
							value={editAnnouncement.location}
							type="text"
							name="location"
						/> */}
					<br></br>
					<label>DESCRIPTION</label>
					<textarea className='text-area'
						onChange={e =>
							setEditAnnouncement({...editAnnouncement, description: e.target.value})
						}
						type="text"
						name="description"
						value={editAnnouncement.description}
					></textarea>
					<br></br>
					<StyledButton className='button-edit' type="submit" value="Update" >update</StyledButton>
				</StyledEditForm>
			</>
		);
	}

	
}
