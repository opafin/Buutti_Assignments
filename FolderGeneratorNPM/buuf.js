// importing dependencies: "fs" for using the file system, "path" for joining file paths
const fs = require("fs");
const path = require("path");

// input parameters for the lecture folder and the assignment folder after the "npx buuf "1" "10" "ts"<--optional
let [npx, buuf, lectureNumber, howManyToGenerate, fileType] = process.argv;
// alternate approach would be:
// let lectureNumber = process.argv[2];
// let howManyToGenerate = process.argv[3];
// let fileType = process.argv[4];

// makes a js-file by default
if (!fileType) {
  fileType = "js";
}

const lectureFolder = `Lecture_${String(lectureNumber).padStart(2, "0")}`;

// Getting the current working directory
const projectRoot = process.cwd();

// Creating the lecture folder
const fullLectureFolderPath = path.join(projectRoot, lectureFolder);
if (!fs.existsSync(fullLectureFolderPath)) {
  fs.mkdirSync(fullLectureFolderPath);
}

for (let i = 1; i <= howManyToGenerate; i++) {
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

  // Checking if a file already exists, and adding a dot if needed
  fs.readdir(fullAssignmentFolderPath, (err, files) => {
    if (!err && files.length === 0) {
      if (!fileType.startsWith(".")) {
        fileType = "." + fileType;
      }
      fs.writeFileSync(fullAssignmentFilePath + fileType, "");
    }
  });
}
