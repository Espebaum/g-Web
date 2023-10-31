import { connectDB } from "@/util/database"
import React from 'react'
import ShowPage from "./ShowPage"

export const revalidate = 20

export default async function List() {

    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    result = result.map(item=>({ ...item, _id: item._id.toString() })) // 중요
    // 원본 result 배열은 새로운 result 배열에 덮어씌워짐 원본 배열을 가지고있어야 하면 변수 이름을
    // result가 아니라 다른 이름으로 하면 됨

    return (
        <div className="list-bg"> 
            <ShowPage result={ result } />
        </div>        
    )
}
