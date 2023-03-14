import mongoose from 'mongoose';

const {Schema} = mongoose;

const announceSchema = new Schema({
	title: {type: String},
	date: {type: String},
	instrument: {type: String},
	genre: {type: String},
	location: {type: String},
	user: {type: String},
	description: {type: String},
});

const Announce = mongoose.models.Announce || mongoose.model('Announce', announceSchema);

export default Announce;
