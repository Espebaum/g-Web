'use client'

import { useRouter } from "next/navigation"

export default function DeatilLink() {
    let router = useRouter()

    return (
        <button onClick={()=>{ router.push('/') }}>수정</button>
    )
}

