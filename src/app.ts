import express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import userRouter from "./routes/users.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    title: "Hello, guy!",
    message:
      "This api was created to deliver sprint 4 in module 4 of the Kenzie Academy Brasil full stack development training course and was/is being developed by Matheus Vieira(Theus). Enjoy it!",
  });
});

app.use("/users", userRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, async () => {
    await AppDataSource.initialize()
      .then(() => console.log("Database initialized on port 5432"))
      .catch((err) => console.error("Error during initializing database", err));

    console.log(`Server initialized on port ${PORT}`);
  });
}

export default app;
