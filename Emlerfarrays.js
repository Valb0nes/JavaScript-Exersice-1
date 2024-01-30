let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];
// arrays are a way to store programming information
// arrays can store any type of information and can contain a mix of them at the same time 
// arrays are ordered which means that every item has a number attached to it
// to make an array you can directly define that array and its values. It's called an array literal. You need to wrap the items in the square brackets to create one tho. 
const hobbies = ['Painting', 'Playing video games', 'Reading'];
console.log(hobbies)
// every element in an array has a numbered position known as the index
// the positions in an index start counting at zero
// you can call the numbers from the index by using hobbies, brackets and then 0
let listitem = hobbies[0]
console.log(listitem)
console.log(hobbies[2])
console.log(hobbies[3])
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
// in order to change the value of 'fall' to 'autumn' you need to change the value of hat index in the array
seasons[3]= 'Autumn';
console.log(seasons);
newYearsResolutions[0]= 'Dress Better';
newYearsResolutions[1]= 'Eat Healthier';
newYearsResolutions[2]= 'Read a lot more';
console.log(newYearsResolutions);