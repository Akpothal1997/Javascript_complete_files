/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

let map = new Map();
map.set(1,'HTML');
map.set(2,'CSS');
map.set(3,'JavaScript');
map.set(4,'Node JS');
map.set(5,'JQuery');
map.set(6,'Bootstrap');

// access the map
console.log(map);

// get Key
console.log(map.get(3)); // JavaScript

// has key
console.log(map.has(5)); // true


// Delete Key
console.log(map);
map.delete(5);
console.log(map);

// Map.Size
console.log(map.size);

// keys
let result = '';
for(let key of map.keys()){
    result += `${key} `;
}
console.log(result);

// values
result = '';
for(let value of map.values()){
    result += `${value} `;
}
console.log(result);

// entries
result = '';
for(let entry of map.entries()){
    result += `${entry[0]} => ${entry[1]} \n`;
}
console.log(result);

// Clear Map
// map.clear();
console.log(map);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let colorSet = new Set();
colorSet.add('white');
colorSet.add('white');
colorSet.add('white');
colorSet.add('black');
colorSet.add('black');
colorSet.add('black');
colorSet.add('orange');
colorSet.add('blue');
colorSet.add('purple');

// access the set
console.log(colorSet);

// has()
console.log(colorSet.has('white'));

// size
console.log(colorSet.size);

// delete
colorSet.delete('black');
console.log(colorSet);

// clear
colorSet.clear();
console.log(colorSet);
