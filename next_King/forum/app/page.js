import { connectDB } from "@/util/database"

export const revalidate = 60;

export default async function Home() {

  const client = await connectDB
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()

	// await fetch('/URL', {cache : 'force-cache'}) // GET 요청 결과 캐싱 가능
	// {cache : 'force-cache'} 안써도 캐싱 된다고 한다.
	// 캐싱 안할거면 {cache : 'no-store'}
	// {next : {revalidate : 60}}, 60초마다 캐싱된 데이터를 갱신한다.

   return (
    <div><p>Welcome to my World~</p></div>
  )
}

// 41792a43fa40285604c5
// 34fbd0ce99e37b59261fd16843e5a3a17e864df9