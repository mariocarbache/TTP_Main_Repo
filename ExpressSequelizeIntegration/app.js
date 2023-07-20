require('dotenv').config();
const express = require('express');
const { Connection } = require('pg');
const Sequelize = require('sequelize');

const app = express();
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Student = sequelize.define('student',{
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

const Course = sequelize.define('course',{
    course_name: Sequelize.STRING,
    course_code: Sequelize.STRING,
})

Student.belongsToMany(Course, { through: "StudentCourses" });
Course.belongsToMany(Student, { through: "StudentCourses" });

(async () => {
    try {
      await sequelize.sync();
      console.log("Models synced with database");
    } catch (err) {
      console.error(err);
    }
  })();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    console.error(err);
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    console.error(err);
  }
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});