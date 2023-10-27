import { connectDB } from "@/util/database"
import React from 'react'
import Link from 'next/link'
import DeatilLink from "./DetailLink"

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
                        <h4><Link prefetch={ false } href={ `/detail/${result[i]._id}`} >
                            { result[i].title }
                        </Link></h4>
                        <DeatilLink/>
                        <p> { result[i].content } </p>
                    </div>
                )
            })
        } 
        </div>        
    )
}