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
  newTitle.innerText = "Welcome to DOM!";
 

  // Part 2
  const backGround2= document.querySelector('body');
  backGround2.style.background = 'rgb(206,242,216)'

  // Part 3
  const element = document.getElementById("favorite-things");
  element.removeChild(element.lastElementChild);

  }

  // Part 4
  //Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the
  // list of elements
  const specialTitles = document.getElementsByClassName("#special-title");
 // for (let i = 0; i < specialTitles.length; i++) {
   // specialTitles[i].style.fontSize = '2rem';
    //console.log(specialTitles);
  //}


  // Part 5
  //Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
  const editRaces = document.querySelector("#past-races li:nth-of-type(4)");
  editRaces.removeChild(editRaces);




  // Part 6
  //Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append
   //it to the **Past Races** list.

  // Part 7
  //Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class 
 // of `.blog-post`, a new `<h1>` with text, and a new `<p>` with some text. Make the new element consistent with the other posts.
   //Think about what order you want to create the elements, and what order you want to append them in.

