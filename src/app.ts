import express, { Application } from "express";
import cors from "cors";
import routes from "./app/routes";
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log("Server listening on port", port);
});

export default app;
