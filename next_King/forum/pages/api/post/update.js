import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.title == '' || req.body.content == '') {
            return res.status(500).json('제목이나 내용을 적어주세요')
        }
        const client = await connectDB
        const db = client.db("forum")
        let result = await db.collection('post').findOne({ title: req.body.title})
        await db.collection('post').updateOne({ _id: new ObjectId(req.body.id)}, 
            {$set : {title : req.body.title, content : req.body.content }}
        )
        return res.redirect(302, '/list')
    }
}
