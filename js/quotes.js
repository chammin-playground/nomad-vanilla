const quotes = [
  {
    quote: "독서야말로 인간이 해야 할 첫째의 깨끗한 일이다.",
    author: "다산 정약용",
  },
  {
    quote:
      "쉬지 말고 기록하라. 기억은 흐려지고 생각은 사라진다. 머리를 믿지 말고 손을 믿어라.",
    author: "다산 정약용",
  },
  {
    quote:
      "뜻을 찾지 못하고 이해하지 못했다면 천 권을 읽어도 담벼락을 보는 것과 같다.",
    author: "다산 정약용",
  },
  {
    quote:
      "독서에는 세 가지가 있다. 입으로 읽고, 눈으로 읽고, 손으로 읽는 독서다. 그중에서 가장 중요한 것이 손으로 읽는 독서 '초서다'",
    author: "다산 정약용",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
