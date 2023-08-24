const seedStudent = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('student', [
            {
                firstName: 'Giacomo',
                lastName: 'Bergamini',
                email: 'giacomo@bergamini.com',
                points: ((Math.random() * (970 - 30)) + 30)
            },
            {
                firstName: 'Mario',
                lastName: 'Rossi',
                email: 'mario@rossi.com',
                points: ((Math.random() * (970 - 30)) + 30)
            },
            {
                firstName: 'Anita',
                lastName: 'Garibaldi',
                email: 'anita@garibaldi.com',
                points: ((Math.random() * (970 - 30)) + 30)
            },
            {
                firstName: 'Steve',
                lastName: 'Jobs',
                email: 'steve@jobs.com',
                points: ((Math.random() * (970 - 30)) + 30)
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('student', null, {});
    }
};

export default seedStudent