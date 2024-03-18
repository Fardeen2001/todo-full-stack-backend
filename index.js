import express from "express";
import DbConnection from "./database/db.js";
import cors from "cors";
import route from "./routes/route.js";
import authRoute from "./routes/authRoute.js";
const app = express();
const PORT = 8000;
app.use(
  cors({
    origin: "http://13.48.124.219:3000",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use("/", authRoute);

DbConnection();
app.listen(PORT, () => {
  console.log(`your port is successfully running on port:${PORT}`);
});
