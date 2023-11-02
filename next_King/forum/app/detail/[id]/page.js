import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import React from 'react'
import DetailLink from "@/app/list/DetailLink"
import Comment from './Comment'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Detail(props) {
		let session = await getServerSession(authOptions);
    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    let data = {
			_id : props.params.id,
			email : session.user.email
		}
    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>{ result.title }</h4>
            <p>{ result.content }</p>
            <DetailLink result={result}/>
						<Comment data={data}/>
        </div>
				)
}