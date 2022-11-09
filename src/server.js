import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRouter from "./router/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
configViewEngine(app);

initWebRouter(app);

app.listen(PORT, () => {
    console.log("app is running on the port" + PORT);
});