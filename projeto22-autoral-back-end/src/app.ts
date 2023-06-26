import 'reflect-metadata';
import 'express-async-errors';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import loadEnv from './config/envs';
import { connectDb, disconnectDB } from './config/database';
import { recipesRouter } from './routers/recipeRouter';
import { handleApplicationErrors } from './middlewares/errorHandlingMiddleware';
import { usersRouter } from './routers/userRouter';

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req: Request, res: Response) => {
    return res.status(200).send('OK!');
  })
  .use('/recipes', recipesRouter)
  .use('/user', usersRouter)
  .use(handleApplicationErrors);

export async function init(): Promise<Express> {
  connectDb();
  //   await connectRedis();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
