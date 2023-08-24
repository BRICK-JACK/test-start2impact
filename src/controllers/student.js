import database from '../models/index.js'

const loadStudent = async (req, res, next) => {
    try {
        const studentsLoaded = await database.models.Student.findAll({
            where: {
                points: { [database.Sequelize.Op.between]: [min, max] }
            },
            limit: 2
        })
        if (studentsLoaded.length > 0) {
            return res
                .status(200)
                .json({
                    success: true,
                    message: 'Due studenti trovati',
                    items: studentsLoaded
                })
        } else {
            return res
                .status(404)
                .json({
                    success: false,
                    message: 'Nessuno studente trovato',
                })
        }
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                messages: 'Problemi con il caricamento degli studenti ' + error.message,
            })
    }


}

export default {
    loadStudent
}