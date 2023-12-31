import { connectDB } from "@/util/database"
import React from 'react'

export default async function handler(req, res) {

    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    if (req.method == 'GET') {
        let today = new Date();
        res.status(200).json(today)
    }
    if (req.method == 'POST') {
        res.status(200).json('Post')
    }
}