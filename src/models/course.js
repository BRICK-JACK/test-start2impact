const Course = (sequelizeConnection, Sequelize) => {
    return sequelizeConnection.define('course', {
        courseId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(1023),
            allowNull: true,
            defaultValue: null
        },
        startDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        endDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        name: {
            singular: 'course',
            plural: 'course'
        },
        timestamps: false
    })
}
export default Course