import { Router } from 'express';

import { createUserSchema, loginSchema } from '../schemas/UserSchemas';
import { validateBody } from '../middlewares/validationMiddleware';
import { singInPost, usersPost } from '../controllers/UserController';

const usersRouter = Router();

usersRouter.post('', validateBody(createUserSchema), usersPost).post('/signin', validateBody(loginSchema), singInPost);

export { usersRouter };
