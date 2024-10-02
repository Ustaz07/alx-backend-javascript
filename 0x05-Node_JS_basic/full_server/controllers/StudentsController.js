import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(process.argv[2]); // The CSV file path is passed when running the server.
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(database).sort();
      sortedFields.forEach((field) => {
        responseText += `Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase(process.argv[2]);
      const students = database[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
