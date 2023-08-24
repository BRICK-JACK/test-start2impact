
import Course from './course.js'
import Enrollment from './enrollment.js'
import Instructor from './instructor.js'
import Student from './student.js'
import Sequelize from 'sequelize'
import config from '../config/config.js'


// const config = require('../config/config.json')
// const Sequelize = require('sequelize');

console.log(config)

const sequelizeConnection = new Sequelize(
    config.database.database, 
    config.database.username, 
    config.database.password, 
    {
        dialect: config.database.dialect,
        host: config.database.host,
    }
)

let models = {}

const courseModel = Course(sequelizeConnection, Sequelize)
const enrollmentModel = Enrollment(sequelizeConnection, Sequelize)
const instructorModel = Instructor(sequelizeConnection, Sequelize)
const studentModel = Student(sequelizeConnection, Sequelize)

courseModel.students = courseModel.belongsToMany(studentModel, {
    through: enrollmentModel,
    foreignKey: 'courseId'
})
studentModel.courses = studentModel.belongsToMany(courseModel, {
    through: enrollmentModel,
    foreignKey: 'studentId'
})

instructorModel.courses = instructorModel.hasMany(courseModel)
courseModel.Instructor = courseModel.belongsTo(instructorModel)

models['Course'] = courseModel
models['Enrollment'] = enrollmentModel
models['Instructor'] = instructorModel
models['Student'] = studentModel

export default {
    models,
    sequelizeConnection,
    Sequelize
}
