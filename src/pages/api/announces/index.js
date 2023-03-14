import dbConnect from '../../../backend/connect';
import Announce from '../../../backend/models/Announce';

export default async function handler(request) {
	await dbConnect();

	if (request.method === 'POST') {
		console.log('post as: ', request.body);
		//get all announcements
		const announces = await Announce.find();
		//once you have the announcements filter through depending on the info from the form
		console.log('announces: ', announces);
		// return that data to the frontend
	}
}

// index from pages/api
