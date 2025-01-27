import * as express from 'express';
import {  handleGlobalErrors } from '@surveybear/surveybear-lib';
import surveyRouter from './routes/surveyRouter';

// TJENARE

const app = express();

//Required to parse json body
app.use(express.json());

//Routers
app.use(surveyRouter);

//Global error handler
app.use(handleGlobalErrors);

export default app;
