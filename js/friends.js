var friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

var lastName = friends.pop()
console.log("Last name is "+ lastName);

console.log(friends.sort());

var friends1 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var arrayConvert = friends1.split(",");
var arrayConvertSort = arrayConvert.sort();
console.log(arrayConvertSort);
console.log(arrayConvertSort.reverse());

var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];
var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];
var combined = myFriends.concat(yourFriends).sort()
console.log(combined)
var foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];
console.log(foods.indexOf('Pho')+1);
foods.splice(foods.indexOf('Donuts'),1)
console.log(foods)
console.log(foods.slice(4,10))

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
ages = ages.sort(function(a,b){
  return a-b;
});
var median = ages[Math.round(ages.length/2-1)]
console.log(median);

var age = {
'Moe':18,
'Larry':19,
'Curly':20,
'Jane':20,
'Emma':21,
'Elizabeth':18,
'Elinor':23,
'Mary':25,
'Darcy':24,
'Grey':18,
'Lydia':24,
'Harriet':18
}
console.log(age);
