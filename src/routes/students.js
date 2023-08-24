import express from 'express'
import studentController from '../controllers/student.js'
const router = express.Router()

router.get('/ranking', [], studentController.loadStudent);

export default router;
