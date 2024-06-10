import express from 'express';
import * as controller from '../controllers/user.controller';


const router = express.Router();

router.post('/signup', controller.signup.bind(controller));
router.post('/login', controller.login.bind(controller));
router.post('/addTrainer', controller.login.bind(controller));
router.get('/count', controller.getUserCount.bind(controller));
router.get('/trainers/count', controller.getTrainerCount);
router.get('', controller.getUsers.bind(controller));
router.get('/:id', controller.getUserById.bind(controller));
router.delete('/:id', controller.deleteUser.bind(controller));
router.put('/:id', controller.updateUserById.bind(controller));

export default router;
