console.log("hello");

//Create a class for your tomagotchi

class Tomagotchi = {
  constructor(name, age, hunger, sleepiness, boredom)
  this.name = name;
  this.age = age;
  this.hunger = hunger;
  this.sleepiness = sleepiness;
  this.boredom = boredom;

}

$('button').on('click', (event) => {
  const petName = $('input').val();
  console.log(petName);
})
