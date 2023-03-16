import {useRouter} from 'next/router';

export default function CreateForm() {
	const router = useRouter();

	async function handleSubmit(event) {
		function dateSetter() {
			const date = new Date();

			let day = date.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();

			let currentDate = `${year}-${month}-${day}`;

			return currentDate;
		}
		event.preventDefault();
		const formElements = event.target;
		const title = formElements.title.value;
		const date = dateSetter();
		const instrument = formElements.instrument.value;
		const genre = formElements.genre.value;
		const location = formElements.location.value;
		const user = formElements.user.value;
		const description = formElements.description.value;

		const newAnnouncement = {
			title: title,
			date: date,
			instrument: instrument,
			genre: genre,
			location: location,
			user: user,
			description: description,
		};
		const response = await fetch('/api/announcements', {
			method: 'POST',
			body: JSON.stringify(newAnnouncement),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			const announcement = await response.json();
			console.log(announcement);
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
				<label>
					User:
					<input type="text" name="user" />
				</label>
				<p>Description:</p>
				<textarea type="text" name="description"></textarea>
				<br></br>
				<input type="submit" value="Create" />
			</form>
		</>
	);
}
