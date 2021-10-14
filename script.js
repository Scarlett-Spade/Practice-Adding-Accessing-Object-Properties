//declare object
const cat = {};

//add properties
cat.name = "Fred";
cat.nickname = "Fluffs";
cat.age = "2";

//accessing properties
console.log(cat.nickname);

console.log(cat["name"]);

//object literal
const dog = {
  name: "Spot",
  nickname: "S",
  age: 1,
  isSleeping: "true",

  play: function () {
    this.isSleeping = false;
    return `{this.name} is outside`;
  }
};

console.log(dog.play());
