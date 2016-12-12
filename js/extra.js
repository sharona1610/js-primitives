var test =  [['apple','pear', 'orange'],  ['dog', 'mouse', 'cat'],  ['green', 'blue', 'red'] ]
var sep = test.join(",")
var temp = sep.split(',').sort()
var final = temp.join()
console.log(final);
