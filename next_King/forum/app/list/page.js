import { connectDB } from "@/util/database"
import React from 'react'

export default async function List() {

    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg"> 
        {
            result.map((a, i)=>{
                return (
                    <div className="list-item" key={i}>
                        <h4> { result[i].title } </h4>
                        <p> { result[i].content } </p>
                    </div>
                )
            })
        } 
        </div>        
    )
}