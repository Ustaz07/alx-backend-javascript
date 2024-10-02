import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = {};
        const lines = data.split('\n').slice(1); // Remove header

        lines.forEach((line) => {
          if (line) {
            const [firstname, , , field] = line.split(',');
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
          }
        });
        resolve(students);
      }
    });
  });
}
