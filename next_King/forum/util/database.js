import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://vocops5000:ab82430918!!@next-generation.hr8k0ld.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// url 뒤에 이름을 붙여서 accounts 저장 위치를 정할 수 있슴
// const url = 'mongodb+srv://vocops5000:ab82430918!!@next-generation.hr8k0ld.mongodb.net/forum' <= 처럼