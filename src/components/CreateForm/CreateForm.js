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
				<label>
					Title:
					<input type="text" name="title" />
				</label>
				<br></br>
				<label>
					Instrument:
					<input type="text" name="instrument" />
				</label>
				<br></br>
				<label>
					Genre:
					<input type="text" name="genre" />
				</label>
				<br></br>
				<label>
					Location:
					<input type="text" name="location" />
				</label>
				<br></br>
				<p>Description:</p>
				<textarea type="text" name="description"></textarea>
				<br></br>
				<StyledButton className='button-create' type="submit" value="Create">create</StyledButton>
			</StyledCreateForm>
		</>
	);
}
