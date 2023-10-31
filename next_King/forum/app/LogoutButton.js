'use client'

import { signIn, signOut } from 'next-auth/react'

export default function LogoutButton() {
	return ( <button onClick={()=>{ signOut() }}>logout</button> )
}