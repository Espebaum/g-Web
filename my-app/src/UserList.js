import React from 'react';

// 11. 배열 렌더링하기
// 09. 배열 내장함수들 (foreach, map, indexOf, findIndex, find, filter, splice ...)

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ];
    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    );
}

export default UserList;
