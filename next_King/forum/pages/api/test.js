import { connectDB } from "@/util/database"
import React from 'react'

export default async function handler(req, res) {

		// console.log(req.query)

    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    if (req.method == 'GET') {
        res.status(200).json(result)
    }
    if (req.method == 'POST') {
        let poo = req.body
        res.status(200).json(poo)
    }
}