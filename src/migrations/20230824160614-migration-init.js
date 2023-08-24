const init = {

  async up(queryInterface, Sequelize) {

    const courseModel = await queryInterface.createTable('course', {
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

    const instructorModel = await queryInterface.createTable('instructor', {
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

    const studentModel = await queryInterface.createTable('student', {
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

    const enrollmentModel = await queryInterface.createTable('enrollment', {
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

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enrollment')
    await queryInterface.dropTable('course')
    await queryInterface.dropTable('instructor')
    await queryInterface.dropTable('student')
  }
}

export default init
