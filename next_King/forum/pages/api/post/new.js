import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '' || req.body.content == '') {
            return res.status(500).json('제목이나 내용을 적어주세요')
        }
        const client = await connectDB
        const db = client.db("forum")
        let result = await db.collection('post').insertOne(req.body)
        return res.redirect(302, '/list')
    }
}