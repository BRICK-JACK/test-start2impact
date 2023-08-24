import Sequelize from 'sequelize'

const Instructor = (sequelize) => 
    sequelize.define('instructor', {
        instructorId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true,
        name: {
            singular: 'instructor',
            plural: 'instructor'
        },
        timestamps: false
    })

export default Instructor