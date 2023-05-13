let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const newTitle = document.querySelector("#main-title");
  newTitle.innerText = "Welcome to my Page";
 

  // Part 2
  const backGround2= document.querySelector('body');
  backGround2.style.background = 'rgb(206,242,216)'

  // Part 3
  //Select **DOM's Favorite Things** list and remove the last list item.
  const listItems = document.querySelectorAll("#favorite-things");
  // Jonathan said to use remove child here


  // Part 4

  // Part 5

  // Part 6

  // Part 7
}