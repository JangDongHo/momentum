const quotes = [
  {
    quote: "1",
    author: "1",
  },
  {
    quote: "2",
    author: "2",
  },
  {
    quote: "3",
    author: "3",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;