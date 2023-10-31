import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        if (req.body.id == '' || req.body.password == '') {
            return res.status(500).json('아이디와 비밀번호를 둘 다 입력해야 합니다')
        }
        const client = await connectDB
        const db = client.db("forum")
        let catalog = await db.collection('accounts').find().toArray()

        const findId = catalog.find(user=>user.id === req.body.id)

        if (findId) {
            return res.status(500).json('이미 존재하는 id입니다')
        }
        let result = await db.collection('accounts').insertOne(req.body)
        res.redirect(302, '/join')
    }
}