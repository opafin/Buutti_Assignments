import express from "express";
import actionsRouter from "./router";
import "dotenv/config";
const port = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/", actionsRouter);

app.listen(port, () => {
  console.log(`Calendar is running at ${port}`);
});
