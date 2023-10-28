export default function Join() {
    return (
        <div className="p-20">
            <h4>회원가입 하기</h4>
            <form action ="/api/post/account" method="POST">
                <input name="id" placeholder="아이디"/>
                <input name="password" placeholder="비밀번호"/>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}