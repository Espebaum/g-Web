import { connectDB } from "@/util/database"
import React from 'react'

export default async function Detail() {
    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').findOne({ title : '죄송합니다' })
    console.log(result)

    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>글 제목</h4>
            <p>글 내용</p>
        </div>
    )
}