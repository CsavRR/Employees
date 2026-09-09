import express from "express";
import * as db from "./database/db.js";
import employeeRoutes from "./routes/employees.js";

const PORT = 3030;
const app = express();


app.use(express.json());
app.use('/employees', employeeRoutes);


app.listen(PORT, () => {
  console.log(`Server runs on PORT ${PORT}`);
});
