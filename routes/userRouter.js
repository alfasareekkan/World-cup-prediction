import express from 'express';
const router = express.Router();
import {userHome } from '../controllers/userController.js'

router.get('/', userHome)

export default router