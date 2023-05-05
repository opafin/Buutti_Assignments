// let buutcamperCount = process.argv[2];
// let teamSize = process.argv[3];

function mathCeilGroupCount(buutcamperCount, teamSize) {
  // the traditional approach
  return Math.ceil(buutcamperCount / teamSize);
}

function moduloGroupCount(buutcamperCount, teamSize) {
  const division = buutcamperCount / teamSize;
  const modulo = division % 1;
  const fullGroups = division - modulo;
  const smolGroup = modulo / modulo > 0; // Nan would destroy the calculation, so we say 0, if division result is Nan
  const groups = fullGroups + smolGroup;

  if (groups !== mathCeilGroupCount(buutcamperCount, teamSize))
    return groups + logError(" fail");
  else return groups;
}

//all these "arithmetic only" solutions fail in some cases

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
