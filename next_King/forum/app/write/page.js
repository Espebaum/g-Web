import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Write() {
	
	let logInfo = await getServerSession(authOptions)
	// console.log(logInfo)
	
	if (logInfo) {
		return <div>로그인 하세요</div>
	} else {
		return (
				<div className="p-20">
						<h4>글 작성</h4>
						<form action ="/api/post/new" method="POST">
								<input name="title" placeholder="글 제목"/>
								<input name="content" placeholder="글 내용"/>
								<button type="submit">버튼</button>
						</form>
				</div>
		)
	}
}