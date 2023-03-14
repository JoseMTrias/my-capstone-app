// import dbConnect from "../../../db/connect";
// import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
	//   await dbConnect();

	//   if (request.method === "GET") {
	//     // get all the jokes from the db
	//     const jokes = await Joke.find();
	//     console.log(jokes)
	//     return response.status(200).json(jokes);
	//   }

	if (request.method === 'POST') {
		console.log(request.body);
		console.log(response);
	}
}

// index from pages/api
