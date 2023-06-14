import express from "express";
import { router } from "./router";

export const server = express();
server.use(express.json());
server.use("/products", router);

server.get("/", (req, res) => {
  res.send("Yes! It works!");
});

const { PORT } = process.env;
export const app = server.listen(PORT, () => {
  console.log("Products API listening to port", PORT);
});
