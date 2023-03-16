import dbConnect from '../../../backend/connect';
import Announcement from '../../../backend/models/Announcement';

export default async function handler(request, response) {
	await dbConnect();

	const {id} = request.query;

	if (request.method === 'GET') {
		const announcement = await Announcement.findById(id);
		if (!announcement) {
			return response.status(404).json({status: 'Not Found'});
		}
		response.status(200).json(announcement);
	}
}
