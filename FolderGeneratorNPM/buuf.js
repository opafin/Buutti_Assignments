// importing dependencies: "fs" for using the file system, "path" for joining file paths
const fs = require("fs");
const path = require("path");

// input parameters for the lecture folder and the assignment folder after the "npx buuf "1" "10""
const [npx, buuf, lectureNumber, howManyToGenerate] = process.argv;
// alternate approach would be:
// const lectureNumber = process.argv[2];
// const howManyToGenerate = process.argv[3];

const lectureFolder = `Lecture_${String(lectureNumber).padStart(2, "0")}`;

// Getting the current working directory
const projectRoot = process.cwd();

// Creating the lecture folder
const fullLectureFolderPath = path.join(projectRoot, lectureFolder);
if (!fs.existsSync(fullLectureFolderPath)) {
  fs.mkdirSync(fullLectureFolderPath);
}

for (let i = 0; i <= howManyToGenerate; i++) {
  const formattedI = String(i).padStart(2, "0");

  const assignmentFolder = `Assignment${lectureNumber}.${formattedI}`;
  const assignmentFile = `assignment${lectureNumber}.${formattedI}`;

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

  // Checking if a base assignment file (.ts or .js) already exists
  if (
    !fs.existsSync(
      fullAssignmentFilePath + ".js" && fullAssignmentFilePath + ".ts"
    )
  ) {
    fs.writeFileSync(fullAssignmentFilePath + ".js", "");
  }
}
