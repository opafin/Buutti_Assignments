//Manual:
//Place this script in the repository's root folder
//Start typing in the vscode terminal "node Ja" Use Tab to autocomplete.
//Then add two parameters separated by spaces.
//E.G: node .\JavaScript_Folder_Generator.js 3 11
//3 is the lecture number 11 is the total count of assignments

// The total count of assignments can be increased later
// e.g from 3 to 15. Just run the script again.
// Previous assignments will not be overwritten, duplicates will not be created.

const fs = require("fs");
const path = require("path");

const lectureNumber = process.argv[2];
const howManyToGenerate = process.argv[3];

const lectureFolder = `Lecture_${lectureNumber}`;

// creating the lecture folder
if (!fs.existsSync(lectureFolder)) {
  fs.mkdirSync(lectureFolder);
}

for (let i = 1; i <= howManyToGenerate; i++) {
  const formattedI = String(i).padStart(2, "0");

  const assignmentFolder = `Assignment${lectureNumber}.${formattedI}`;
  const assignmentFile = `assignment${lectureNumber}.${formattedI}.js`;

  const fullAssignmentFolderPath = path.join(lectureFolder, assignmentFolder);

  // Creating the assignment folder inside the lecture folder
  if (!fs.existsSync(fullAssignmentFolderPath)) {
    fs.mkdirSync(fullAssignmentFolderPath);
  }

  // Creating the assignment file inside the assignment folder
  const fullAssignmentFilePath = path.join(
    fullAssignmentFolderPath,
    assignmentFile
  );
  if (!fs.existsSync(fullAssignmentFilePath)) {
    fs.writeFileSync(fullAssignmentFilePath, "");
  }
}
