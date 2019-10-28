// turn over card on click
  //add visible class

//shuffle cards

//populate cards from a bank of syntax

//a way to the store the syntax where

//a way to check for a match
var cards = [];
var cardHTML = document.getElementsByClassName("class");
for (var i = 0; i < cardHTML.length; i++ ){
  cards[i] = cardHTML[i];
}

for (var j = 0; j < cards.length; j++){
  cards[j].addEventListener("click", function(){
    cards[j].classList.toggle("visible");
  })
}




// this only works for one card so I'd have to copy this many times
var card0 = document.getElementsByClassName("card")[0];

card0.addEventListener("click",function(){
  card0.classList.toggle("visible");
});
var card1 = document.getElementsByClassName("card")[1];

card1.addEventListener("click",function(){
  card1.classList.toggle("visible");
});
//-------------------------------------------
//Didn't work
// var cards = document.querySelectorAll("card");
//
// cards.forEach(function(card){
//   card.addEventListener("click",function(){
//     card.classList.toggle("visible");
//   });
// });
//-------------------------------------------
//does't work
// var cards = document.getElementsByClassName("grid");
//
// cards.addEventListener("click",flipCard,false);
//
// function flipCard(card){
//   if (card.target !== card.currentTarget){
//       card.target.classList.toggle("visible");
//   }
// }

// This works but selects the last card
// var cards = document.getElementsByClassName("card");
// for(var i = 0; i < cards.length; i++){
//   var card = cards[i];
//   card.addEventListener("click",function(){
//     card.classList.toggle("visible");
//   });
// }
// ---------------------------------------
// var cards = document.getElementsByClassName("card");
// var cardsArr = [];
// for(var i = 0; i < cards.length; i++){
//   cardsArr[i] = cards[i];
//   cardsArr[i].addEventListener("click",function(){
//     cardsArr[i].classList.toggle("visible");
//   });
// }
