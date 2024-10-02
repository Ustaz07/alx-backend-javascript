// 2-read_file.js

const fs = require('fs');

/**
 * Count students in a database file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  let data;

  // Attempt to read the file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split the data into lines and filter out empty lines
  const lines = data.trim().split('\n').filter(line => line);

  // Extract the header and student data
  const header = lines[0].split(',');
  const students = lines.slice(1).map(line => line.split(','));

  // Create an object to count students by field
  const studentCount = {};
  let totalStudents = 0;

  // Populate the student count
  students.forEach(student => {
    const field = student[3]; // Get the field (CS/SWE) from the fourth column
    const firstname = student[0]; // Get the first name from the first column

    // Initialize the field count if not already done
    if (!studentCount[field]) {
      studentCount[field] = { count: 0, names: [] };
    }

    // Update the count and names
    studentCount[field].count += 1;
    studentCount[field].names.push(firstname);
    totalStudents += 1; // Increment total student count
  });

  // Log the total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Log the breakdown of students by field
  for (const field in studentCount) {
    const names = studentCount[field].names.join(', ');
    console.log(`Number of students in ${field}: ${studentCount[field].count}. List: ${names}`);
  }
}

module.exports = countStudents;
