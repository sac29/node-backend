import exppress from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = exppress();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(exppress.json({ limit: "16kb" }));
app.use(exppress.urlencoded({ extended: true, limit: "16kb" }));
app.use(exppress.static("public"));
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";

// routes declaration

app.use("/api/v1/users", userRouter);

export default app;