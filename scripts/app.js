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
$('.Tomagotchi').append(img)

//Add the ability to name your pet
let namePet = $('button').on('click', (event) => {
  const petName = $('input').val();
  console.log(petName);
  const h1 = $('<h1>').text("My name is " + petName)
  h1.appendTo('header')
});

//Display the following metrics for your pet.
//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age

// Add buttons to the screen to feed your pet,
// turn off the lights, and play with your pet
