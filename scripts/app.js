console.log("hello");

//Create a class for your tomagotchi

class Tomagotchi {
  constructor(name, age, hunger, sleepiness, boredom) {
    this.name = name;
    this.age = age;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
  }
}

//Display a character of your choice on the screen to represent your pet
const img = $('<img>').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/3/37/03_Mametchi.svg/revision/latest/scale-to-width-down/241?cb=20111125003832')
$('.Character').append(img)
//could add animated gif??

//Add the ability to name your pet
$('#name').on('click', (event) => {
  const petName = $('input').val();
console.log(petName);
const h1 = $('<h1>').text("My name is " + petName)
h1.appendTo('.Character');
$('input').val("");
$('header').empty();
$('.Instructions').empty();
});


//Display the following metrics for your pet.
//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age
//Add buttons to the screen to feed your pet,
//turn off the lights, and play with your pet

//hunger
let hunger = 10
  const $hungerDiv = $('<div>');
  $hungerDiv.text("Hunger level is " + hunger);
  $hungerDiv.appendTo($('#hungry'));

$('#feed').on('click', (event) => {
    console.log("feed button clicked");
});

//sleep
let sleepiness = 10
  const $sleepyDiv = $('<div>');
  $sleepyDiv.text("Sleepiness level is " + sleepiness);
  $sleepyDiv.appendTo($('#sleepy'));

$('#lights').on('click', (event) => {
    console.log("sleep button clicked");
});

//play
let boredom = 10
  const $boredomDiv = $('<div>');
  $boredomDiv.text("Boredom level is " + boredom);
  $boredomDiv.appendTo($('#boredom'));

$('#play').on('click', (event) => {
    console.log("play button clicked");
});


//Age
let age = 1
const $ageDiv = $('<div>');
$ageDiv.text("Current age is " + age);
$ageDiv.appendTo($('#age'));
