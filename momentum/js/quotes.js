const quotes = [
    {
        quote: '늦었다고 생각할 때는 진짜 너무 늦었다.',
        author: '-거성 박명수-',
    },
    {
        quote: '가는 말이 고우면 얕본다.',
        author: '-거성 박명수-',
    },
    {
        quote: '티끌은 모아봤자 티끌이다.',
        author: '-거성 박명수-',
    },
    {
        quote: '세번 참으면 호구된다.',
        author: '-거성 박명수-',
    },
    {
        quote: '어려운 길은 길이 아니다',
        author: '-거성 박명수-',
    },
    {
        quote: '잘생긴 놈은 얼굴 값하고 못생긴 놈은 꼴값한다',
        author: '-거성 박명수-',
    },
    {
        quote: '지금 공부 안하면 더울 때 더운데서 일하고, 추울 때 추운데서 일한다.',
        author: '-거성 박명수-',
    },
    {
        quote: '고생 끝에 골병난다.',
        author: '-거성 박명수-',
    },
    {
        quote: '포기하면 편하다.',
        author: '-거성 박명수-',
    },
    {
        quote: '내일도 할 수 있는 일을 굳이 오늘 할 필요는 없다.',
        author: '-거성 박명수-',
    },
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
