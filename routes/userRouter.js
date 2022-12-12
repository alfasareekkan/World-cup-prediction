import express from 'express';
const router = express.Router();
import {
    userHome, userPrediction
} from '../controllers/userController.js'

router.get('/', userHome)
router.post('/user-input',userPrediction)

export default router