export default function CreateForm() {
	return (
		<>
			<form>
				<label>
					Title:
					<input type="text" name="title" />
				</label>
				<br></br>
				<label>
					Date:
					<input type="text" name="date" />
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
				<textarea></textarea>
				<br></br>
				<input type="submit" value="Create" />
			</form>
		</>
	);
}
