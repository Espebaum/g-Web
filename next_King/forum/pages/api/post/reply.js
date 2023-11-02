import { connectDB } from "@/util/database"

export default async function Reply(req, res) {
	if (req.method == 'POST') {
		const data = JSON.parse(req.body);
		const	replydb = {
			comment : data.comment,
			parent : data.id,
			author : data.email
		}
		console.log(replydb)
		const client = await connectDB
		const db = client.db("forum")
		let result = await db.collection('comments').insertOne(replydb)
		res.status(200).json('전송 완료')
	}
}

