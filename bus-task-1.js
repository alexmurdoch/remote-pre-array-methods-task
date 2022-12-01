const bus = ['Driver'];

bus.push('Alice');
bus.push('Bob', 'Carlos', 'David');
bus.pop();
bus.slice(0, 2);
bus.push('Erykah');

// Predict what the bus will look like BEFORE seeing the console.log
// If you were surprised, trace back each of the last methods and try to figure out why

//[ 'Driver', 'Alice', 'Bob', 'Carlos', 'Erykah' ]
bus.push('Fernando'); 
bus[2] = 'Gertrude';
bus.push('Isaac');
console.log(bus)
bus.splice(1, 0, 'Hamza'); // <---- use MDN to try to figure out what this does!
bus.push('Jenny');
console.log(bus);
// Predict what the bus will look like now, then uncomment the console.log below to check
// console.log(bus);
