import express from 'express';
import { json } from 'express';
import cookieSession from 'cookie-session';
import {  NotFoundError } from "@anutils/common"
import { routes } from "./src/routes";
import depentencies from "./src/config/dependencies";
import ErrorHandler from './src/libs/utils/ErrorHnadler';

 
const app = express();

app.set("trust proxy", true);
app.use(json()); 
app.use(
  cookieSession({
    signed: false,
  })
);


app.use("/api", routes(depentencies));

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
