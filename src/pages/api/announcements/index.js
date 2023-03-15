import dbConnect from '../../../backend/connect';
import Announcement from '../../../backend/models/Announcement';

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === 'GET') {
		const announcements = await Announcement.find();
		response.status(200).json(announcements);
	}
	if (request.method === 'POST') {
		try {
			const announcementData = request.body;
			const announcement = new Announcement(announcementData);
			await announcement.save();
			return response.status(201).json({status: 'Announcement created.'});
		} catch (error) {
			console.error(error);
			return response.status(400).json({error: error.message});
		}
	}
}
