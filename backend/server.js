import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import UserRouter from "./routes/user.routes.js";
import CollegeRouter from "./routes/college.routes.js";
import PostRouter from "./routes/post.routes.js";
import SubscribeRouter from "./routes/mailing.routes.js";
import ImageRouter from "./routes/images.routes.js";

const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();
dotenv.config();
const app = express();

// Set Document-Policy header for js-profiling
app.use((req, res, next) => {
  res.set("Document-Policy", "js-profiling");
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", UserRouter);
app.use("/api/colleges", CollegeRouter);
app.use("/api/posts", PostRouter);
app.use("/api/subscribe", SubscribeRouter);
app.use("/api/images", ImageRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
