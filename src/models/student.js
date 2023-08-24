const Student = (sequelizeConnection, Sequelize) => 
    sequelizeConnection.define('student', {
        studentId: {
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
            allowNull: false
        },
        points: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        freezeTableName: true,
        name: {
            singular: 'student',
            plural: 'student'
        },
        timestamps: false
    })

export default Student