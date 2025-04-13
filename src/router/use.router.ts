import { Router } from 'express'
import Controller from '../controllers/use.controllers'

const  controller = new Controller()
const router = Router();

router.post('/', controller.postCreate)
router.get('/', controller.getUser)

export default router
