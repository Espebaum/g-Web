import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
	try {
			let session = await getServerSession(req, res, authOptions)
			if (session) {
			const client = await connectDB;
			const db = client.db("forum");
			let find = await db.collection('post').findOne({ _id: new ObjectId(req.query) })
			
			// console.log(session)
			// console.log(find)

			if (session.user.email == find.author || session.user.role == 'admin') {
				let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.query) });
				console.log(result);
				res.status(200).json('삭제 완료');
			} else {
				res.status(500).json('현재 로그인 정보가 글 작성자와 동일하지 않습니다.')
			} } else {
				res.status(500).json('로그인 정보가 없습니다.')
			}

		} catch (error) {
				console.error('에러 발생:', error);
				res.status(500).json('문제 있음');
		}
}