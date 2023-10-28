'use client'

import { useRouter } from "next/navigation"

export default function DeatilLink(props) {
    let router = useRouter()
    const { result } = props

    return (
        <button onClick={()=>{ router.push('/edit/' + result._id) }}>수정</button>
    )
}

