import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {

	if (req.method === "POST") {
				if (req.body.name && req.body.email && req.body.password)	{
				let db = (await connectDB).db('forum');
		
				let catalog = await db.collection('user_cred').find().toArray()
				const findId = catalog.find(user=>user.email === req.body.email)
				if (findId) {
					return res.status(500).json('이미 존재하는 email입니다')
				}
				
				const hash = await bcrypt.hash(req.body.password, 10);
				req.body.password = hash;

				req.body.role = "normal"

				await db.collection('user_cred').insertOne(req.body);
				res.status(200).json('성공');
			} else {
				res.status(500).json('모든 정보를 작성해주세요')
			}
  }
}; 