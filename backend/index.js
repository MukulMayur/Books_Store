import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/books.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5555;

// Implement CORS before routes
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["PUT", "GET", "DELETE", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to MERN Book-store");
});

app.use(express.json());
app.use("/books", router);

// Connect MongoDB URL
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
