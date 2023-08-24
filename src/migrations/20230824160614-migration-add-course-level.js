

const courseLevel = {

    async up(queryInterface, Sequelize) {

        queryInterface.addColumn('course', 'level',
            {
                type: Sequelize.STRING,
                allowNull: false,
            }
        );

    },

    async down(queryInterface, Sequelize) {
        queryInterface.removeColumn('course', 'level', {});
    }
}

export default courseLevel
