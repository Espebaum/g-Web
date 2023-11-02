'use client'

import { useState } from "react"

export default function Comment(props) {
	let [comment, setComment] = useState('')
	const data = {
		comment: comment,
		id: props.data._id,
		email:props.data.email
	}
	return (
		<div>
			<div>댓글 목록</div>
			<input onChange={(e)=>{ setComment(e.target.value) }} />
			<button onClick={()=>{ fetch('/api/post/reply', 
				{ method: 'POST', body: JSON.stringify(data) }) }
			}>전송</button>
		</div>
	)
}

{/* <span onClick={(e)=>{
	fetch('/api/delete?id=' + a._id).then((r)=>r.json())
		.then(() => {
			e.target.parentElement.style.opacity = 0;
			setTimeout(()=>{
				e.target.parentElement.style.display = 'none'
			}, 1000)
		})
}}>🗑️</span> */}