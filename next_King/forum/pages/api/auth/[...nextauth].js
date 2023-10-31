import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '41792a43fa40285604c5',
      clientSecret: '34fbd0ce99e37b59261fd16843e5a3a17e864df9',
    }),
		
  ],
  secret : 'ab82430918!!',
	adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 

// MongoDB에 추가되는 db 정보
// 1. sessions : 현재 로그인된 유저 세션정보 저장용
// 2. users :  가입된 유저 정보
// 3. accounts : 가입된 유저의 계정 정보 ()