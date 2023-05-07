// let buutcamperCount = process.argv[2];
// let teamSize = process.argv[3];

// the traditional approach
function mathCeilGroupCount(buutcamperCount, teamSize) {
  return Math.ceil(buutcamperCount / teamSize);
}

// Without using math.ceil() this is my favourite solution so far
// It uses || only to get past the quirk with division by zero found in math & many programming languages
function moduloGroupCount(buutcamperCount, teamSize) {
  //
  const division = buutcamperCount / teamSize; // e.g 2.76
  const modulo = division % 1; // e.g 2.76 % 1 = 0.76 the modulo is the left over after the division.
  const fullGroups = division - modulo; // e.g 2.76 - 0.76 remove modulo from division: we get two full groups = 2.00
  const smolGroup = modulo / modulo || 0; // left overs in modulo result in 1. 0/0 results in 0 instead of NaN.
  // just using smolGroup = modulo ? 1 : 0 would also work. But this is about minimizing the use of anything but arithmetic.
  const groups = fullGroups + smolGroup; // lets add the groups! -> correct result!

  // checking the results against the mathCeilGroupCount function
  // logging an error *in red* if the results don't match
  if (groups !== mathCeilGroupCount(buutcamperCount, teamSize))
    return groups + logError(" fail");
  else return groups;
}

// all these "arithmetic only" solutions fail in some cases
function calculateTeamsConcise(people, size) {
  let groups = 
    (people + size - 1) / size - ((people + size - 1) % size) / size; //prettier-ignore

  if (groups !== mathCeilGroupCount(people, size))
    return groups + logError(" fail");
  else return groups;
}

function calculateTeamsConciseAdditional(people, size) {
  const groups = 
    (people + size - 1 - (people - 1) % size) / size; //prettier-ignore

  if (groups !== mathCeilGroupCount(people, size))
    return groups + logError(" fail");
  else return groups;
}

// Test conditions
const testCases = [
  { people: 0, size: 4 },
  { people: 3, size: 1 },
  { people: 7, size: 2 },
  { people: 10, size: 3 },
  { people: 12, size: 0 },
  { people: 13, size: 7 },
  { people: 18, size: 4 },
  { people: 20, size: 9 },
  { people: 70, size: 20 },
  { people: 85, size: 25 },
  { people: 90, size: 18 },
  { people: 300, size: 75 },
  { people: 800, size: 300 },
  { people: 900, size: 350 },
  { people: 2600, size: 650 },
  { people: 2800, size: 700 },
  { people: 3600, size: 900 },
  { people: 3800, size: 950 },
  { people: 4000, size: 1000 },
];
testCases.forEach((testCase, index) => {
  console.log(
    `Test Case ${index + 1}: People = ${testCase.people}, Size = ${
      testCase.size
    }`
  );

  let ceil = mathCeilGroupCount(testCase.people, testCase.size);
  console.log("number of groups", ceil, "math.ceil");
  let modulo = moduloGroupCount(testCase.people, testCase.size);
  console.log("number of groups", modulo, "modulo");
  let concise = calculateTeamsConcise(testCase.people, testCase.size);
  console.log("number of groups", concise, "concise");
  let conciseAdditional = calculateTeamsConciseAdditional(testCase.people,testCase.size); //prettier-ignore
  console.log("number of groups", conciseAdditional, "conciseAdditional");
});

function logError(message) {
  const red = "\x1b[31m";
  const reset = "\x1b[0m";
  return red + message + reset;
}

function logSuccess(message) {
  const green = "\x1b[32m";
  const reset = "\x1b[0m";
  return green + message + reset;
}
