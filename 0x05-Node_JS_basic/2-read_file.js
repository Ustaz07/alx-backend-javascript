const fs = require('fs');

/**
 * Count students in a CSV database.
 * @param {string} fileName - The path to the CSV file.
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let studentCount = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    lines.forEach((line) => {
      if (line) {
        studentCount += 1;
        const fieldData = line.split(',');
        const field = fieldData[3]; // Assuming field is the fourth column

        if (students[field]) {
          students[field].push(fieldData[0]); // Add student name
        } else {
          students[field] = [fieldData[0]]; // Initialize array with student name
        }

        fields[field] = (fields[field] || 0) + 1; // Increment count
      }
    });

    console.log(`Number of students: ${studentCount - 1}`); // Exclude header
    Object.entries(fields).forEach(([key, value]) => {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
