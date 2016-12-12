var key = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var obj = {}
for (var i = 0; i < 10; i++) {
  obj[key[i]] = value[i]
}
console.log(obj)
