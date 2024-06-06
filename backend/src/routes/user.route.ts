import express from 'express';
import * as controller from '../controllers/user.controller';


const router = express.Router();

router.post('/signup', controller.signup.bind(controller));
router.post('/login', controller.login.bind(controller));

export default router;