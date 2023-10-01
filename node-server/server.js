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
app.use(cors());

app.use("/api/guess", guess);

// app.get("/", async (req, res) => {
//   // this var contains the data you want to send
//   var data = [2, 8, 4, 5, 6];
//   const response = await fetch("http://127.0.0.1:5000/arraysum", {
//     method: "POST",
//     body: JSON.stringify({array : data}),
//     headers: { "Content-Type": "application/json" },
//   });
//   const result = await response.json()
//   console.log(result);
// });



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("node server running....");
});
