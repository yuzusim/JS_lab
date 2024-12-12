const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

// randomness 무작위성
// 1. 배열안에 있는 엘레멘터에 어떻게 접근할껀지?
// 엘레멘터 가져오려면 1이 아니라 0을 써야함 -> 배열은 0부터 시작하니까 
console.log(quotes[0]);

// 배열에 접근하기 위해 Math module을 사용
// random() => 0 ~ 1 사이의 랜덤한 숫자를 제공함
// 
// 우리는 0 ~ 10 사이의 숫자가 필요
// Math.random() * 10 곱하면 0 ~ 10 사이의 숫자를 얻을 수 있어


// Math.round(1.1) 소수점을 반올림 하는 것
// Math.ceil(1.1) -> 2가 됨 , 소수점을 올리는 것(올림)(숫자를 천장까지 높여줌)
// Math.floor는 소수점을 버리는 것(버림)

// floor()사용
// 랜덤라게 얻은 숫자에 10을 곱해서 floor()를 사용
// Math.floor(Math.random() * 10)
// console.log(quotes[Math.floor(Math.random() * 10)]);

// 문제점 숫자 10을 하드 코딩 -> 10개의 명언만 가지고 있을때만 동작함 
// 배열의 길이 알아내기
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// Math.random() * n 에다가
// Math.floor을 붙이면 0부터 n-1까지 나오고,
// Math.ceil을 붙이면 1부터 n까지 나오고
// Math.round를 붙이면 0부터 n까지 나와요.