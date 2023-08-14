import { Request, Response } from "express";
import app from "./app";
import routes from "./app/routes";

app.get("/", (req: Request, res: Response) => {
  res.send("okkk");
});

app.use("/api/v1", routes);
