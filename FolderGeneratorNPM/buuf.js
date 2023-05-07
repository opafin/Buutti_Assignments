const fs = require("fs");
const path = require("path");

const lectureNumber = process.argv[2];
const howManyToGenerate = process.argv[3];

const lectureFolder = `Lecture_${String(lectureNumber).padStart(2, "0")}`;

// Get the current working directory
const projectRoot = process.cwd();

// creating the lecture folder
const fullLectureFolderPath = path.join(projectRoot, lectureFolder);
if (!fs.existsSync(fullLectureFolderPath)) {
  fs.mkdirSync(fullLectureFolderPath);
}

for (let i = 0; i <= howManyToGenerate; i++) {
  const formattedI = String(i).padStart(2, "0");

  const assignmentFolder = `Assignment${lectureNumber}.${formattedI}`;
  const assignmentFile = `assignment${lectureNumber}.${formattedI}.js`;

  const fullAssignmentFolderPath = path.join(
    fullLectureFolderPath,
    assignmentFolder
  );

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
