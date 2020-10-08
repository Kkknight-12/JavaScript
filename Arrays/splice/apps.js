let animals = ["shark", "salmon", "whale", "bear", "lizard"];
console.log(animals);

// splice us used to add/delete elements at any position in array

// ===========================
// adding
// ===========================
// first argument is positon where you want to start edition
// second is how nay elements you want delete , zero mean nothing to delete
console.log(animals.splice(1, 0, "secBee"));
console.log(animals);

// ===========================
// adding multiple element
// ===========================
// adding after salmon
// deleting 2 elements starting from salmon
console.log(animals.splice(2, 2, "tortoise", "snake"));
console.log(animals);

// ===========================
// deleting
// ===========================
// first-argu=> starting at index of 1
// sec-argu=> delete 2 item
// position 1 and 2 will be deleted

console.log(animals.splice(1, 2));
// it will return the element item deleted
console.log(animals);
