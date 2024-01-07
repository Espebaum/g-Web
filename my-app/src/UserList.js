import React, { useEffect } from 'react';

// 11. 배열 렌더링하기
// 09. 배열 내장함수들 (foreach, map, indexOf, findIndex, find, filter, splice ...)

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log('나타남');
        console.log(user);
        return () => {
            console.log('사라짐');
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => onToggle(user.id)}>
                {user.username}
            </b>{' '}
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;
