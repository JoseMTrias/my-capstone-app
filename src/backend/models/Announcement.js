import mongoose from 'mongoose';

const {Schema} = mongoose;

const announcementSchema = new Schema({
	title: {type: String},
	date: {type: String},
	instrument: {type: String},
	genre: {type: String},
	location: {type: String},
	user: {type: String},
	description: {type: String},
});

const Announcement = mongoose.models.Announce || mongoose.model('Announce', announcementSchema);

export default Announcement;
