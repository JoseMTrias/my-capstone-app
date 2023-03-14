import dbConnect from '../../../backend/connect';
import Announcement from '../../../backend/models/Announcement';

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === 'GET') {
		const announcements = await Announcement.find();
		response.status(200).json(announcements);
	}
}
