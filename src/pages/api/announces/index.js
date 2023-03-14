import dbConnect from '../../../backend/connect';
import Announce from '../../../backend/models/Announce';

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === 'GET') {
		//get all announcements
		const announces = await Announce.find();
		response.status(200).json(announces);
	}
}
