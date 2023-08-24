import Sequelize from 'sequelize'

const Enrollment = (sequelize) => 
    sequelize.define('enrollment', {
        studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        courseId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        name: {
            singular: 'enrollment',
            plural: 'enrollment'
        },
        timestamps: false
    })

export default Enrollment