console.log("hello, this is a tamagotchi");
//Create a class for your tamagotchi

//Display a character of your choice on the screen to represent your pet
const img = $('<img>').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/3/37/03_Mametchi.svg/revision/latest/scale-to-width-down/241?cb=20111125003832')
$('.Character').append(img)
//could add animated gif??

class Tamagotchi {
  constructor(name, age, hunger, sleepiness, boredom) {
    this.name = name;
    this.age = 0;
    this.hunger = 3;
    this.sleepiness = 3;
    this.boredom = 3;
  }

//Add the ability to name your pet
  addName(){
    $('#name').on('click', (event) => {
        const petName = $('input').val();
        console.log(petName);
        const h1 = $('<h1>').text("My name is " + petName)
        h1.appendTo('.Character');
        $('input').remove();
        $('#name').remove();
        $('header').empty();
        $('.Instructions').empty();
    });
  }

//Display the following metrics for your pet.
//Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age
//Add buttons to the screen to feed your pet,
//turn off the lights, and play with your pet

  timePasses() {
    this.hunger = this.hunger + 1;
    this.boredom = this.boredom + 1;
    this.sleepiness = this.sleepiness + 1;
  }

  isAlive() {
    if (this.hunger < 10 || this.boredom < 10 || this.sleepiness < 10){
      return true;
    } else {
        return false;
    }
  }

  feedTama(){
    this.hunger = this.hunger - 1
  }

  playTama() {
    this.boredom = this.boredom - 1
  }

  sleepTama (){
    this.sleepiness = this.sleepiness -1
  }
}

const newTama = new Tamagotchi('', 0, 1, 1, 1)

newTama.addName();
// newTama.addAge();
newTama.isAlive();
// newTama.timePasses();


let countdown;
countdown = setInterval(function() {
  newTama.timePasses();
    $("#hungry").text("Hunger level is " + newTama.hunger);
    $('#sleepy').text("Sleepiness level is " + newTama.sleepiness);
    $("#boredom").text("Boredom level is " + newTama.boredom);
    // if (newTama.boredom && newTama.sleepiness || newTama.hunger === 10000) {
    //   clearInterval(countdown);
    // }
  }, 4000);


//buttons
$('#feed').on('click', (event) => {
    console.log("feed button clicked");
    newTama.hunger -= 1;
    $("#hungry").text("Hunger level is now " + newTama.hunger)
});

$('#lights').on('click', (event) => {
    console.log("sleep button clicked");
    newTama.sleepiness -= 1;
    $('#sleepy').text("Sleepiness level is now " + newTama.sleepiness)
});

$('#play').on('click', (event) => {
    console.log("play button clicked");
    newTama.boredom -= 1;
    $("#boredom").text("Boredom level is now " + newTama.boredom)
});
