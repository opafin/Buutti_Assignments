let numberOfParticipants = process.argv[2];
let groupSize = process.argv[3];

console.log("number of participants", numberOfParticipants);
console.log("group size", groupSize);

console.log("pure division", numberOfParticipants / groupSize);
console.log("Number of groups", Math.ceil(numberOfParticipants / groupSize));
