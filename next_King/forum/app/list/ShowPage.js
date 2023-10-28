'use client'

import Link from 'next/link'

export default function ShowPage({result}) {

    return (
        <div>
            {result.map((a, i)=>(
                <div className="list-item" key={i}>
                    <Link href={ `/detail/${result[i]._id}`} >
                        <h4>{ result[i].title }</h4>
                    </Link>
                    <span onClick={(e)=>{
                     	fetch('/api/delete?id=' + a._id).then((r)=>r.json())
												.then(() => {
													e.target.parentElement.style.opacity = 0;
													setTimeout(()=>{
														e.target.parentElement.style.display = 'none'
													}, 1000)
												})
                    }}>🗑️</span>
                    <p> 1월 1일 </p>
                </div> 
            ))}
        </div>
    );
}