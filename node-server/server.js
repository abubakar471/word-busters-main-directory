import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
import guess from "./routes/guess"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin : process.env.CLIENT_URL
}));

app.use("/api/guess", guess);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("node server running....");
});
