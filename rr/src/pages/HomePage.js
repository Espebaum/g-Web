import { useState } from 'react';
import style from './HomePage.module.css';

const HomePage = () => {
    const [modalId, setModalId] = useState(null);
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

    const toggleModal = (id) => {
        if (modalId === id) {
            setModalId(null);
        } else {
            setModalId(id);
        }
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.Friendlist}>
                <div className={style.fCommand}>
                    <div className={style.myFriend}>친구 목록</div>
                    <button className={style.addFriend}>친구 추가</button>
                </div>

                {users.map((item) => (
                    <>
                    <button className={style.friendInfo} key={item.id} onClick={() => toggleModal(item.id)}>
                        {item.username}
                    </button>
                    <div>
                        {modalId === item.id && <button>friendInfo</button>}
                    </div>
                    </>
                    ))}
            </div>
            <div className={style.ui}>
                <button className={style.match}>Match</button>
                <button className={style.match}>Time Attack</button>
            </div>
        </div>
    );
};
export default HomePage;
