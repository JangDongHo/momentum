const quotes = [
  {
    quote: "부동산에서 돈을 벌고,​ 주식에서 돈을 잃는 이유가 있다. 집을 선택하는 데는 몇 달을 투자하지만 종목 선정은 몇 분 안에 해버리기 때문이다.",
    author: "피터 린치",
  },
  {
    quote: "10년 이상 주식을 보유할 생각이 없으면 단 10분도 보유하지 말아라",
    author: "워렌 버핏",
  },
  {
    quote: "주식을 소유하는 것은 아이를 갖는 것과 같다. 당할 수 있는 것보다 더 많이 관여하지 말아라.",
    author: "피터 린치",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `" ${todaysQuote.quote} "`;
author.innerText = `- ${todaysQuote.author}`;