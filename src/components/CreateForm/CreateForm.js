import {useRouter} from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"
import StyledCreateForm from './styled';
import StyledButton from '../Button/styled';

import useSWR from 'swr';

export default function CreateForm() {
	const { data: session } = useSession()

	const router = useRouter();
	const announcements = useSWR('/api/announcements');

	async function handleSubmit(event) {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();
		let currentDate = `${year}-${month}-${day}`;

		event.preventDefault();

		const data = new FormData(event.target);
		const formData = Object.fromEntries(data);

		const response = await fetch('api/announcements', {
			method: 'POST',
			body: JSON.stringify({...formData, date: currentDate, user: session.user.name, userId: session.user.id}),
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
			<StyledCreateForm onSubmit={handleSubmit}>
				<label>TITLE</label>
				<input type="text" name="title" />
				<br></br>
				<label>INSTRUMENT</label>
				<select className="select" id="instrument" name="instrument" >
					<option disabled selected value> -- select an option -- </option>
					<option value="Guitar">Guitar</option>
					<option value="Bass">Bass</option>
					<option value="Drums">Drums</option>
					<option value="Vocals">Vocals</option>
				</select>
				<br></br>
				<label>GENRE</label>
				<select className="select" id="genre" name="genre">
					<option disabled selected value> -- select an option -- </option>
					<option value="Rock">Rock</option>
					<option value="Shoegaze">Shoegaze</option>
					<option value="Pop">Pop</option>
					<option value="Jazz">Jazz</option>
					<option value="Funk">Funk</option>
					<option value="Electronic">Electronic</option>
					<option value="Classical">Classical</option>
				</select>
				<br></br>
				<label>LOCATION</label>
				<select className="select" id="location" name="location">
					<option disabled selected value> -- select an option -- </option>
					<option value="Berlin">Berlin</option>
				</select>
				<br></br>
				<label>DESCRIPTION</label>
				<textarea className='text-area' type="text" name="description"></textarea>
				<br></br>
				<StyledButton className='button-create' type="submit" value="Create">create</StyledButton>
			</StyledCreateForm>
		</>
	);
}
