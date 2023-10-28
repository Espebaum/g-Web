import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import React from 'react'

export default async function Edit(props) {
    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    // await db.collection('post').updateOne({  }, 
    //     {$set : { title : '', content : '바보2' }}
    // )

    return (
        <div className="p-20">
        <h4>글 수정하기</h4>
        <form action ="/api/post/update" method="POST">
            <input type="hidden" name="id" value={props.params.id} />
            {/* <input style={{ display : 'none' }} name="_id" value={ result._id.toString() } /> */}
            <input name="title" defaultValue={ result.title } />
            <input name="content" defaultValue={ result.content } />
            <button type="submit">제출</button>
        </form>
    </div>
    )
}