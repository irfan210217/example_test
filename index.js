import express from "express";
import cors from "cors";
import product from "./src/routes/productRoute.js";
import karyawan from "./src/routes/karyawanRoute.js";
import login from "./src/routes/authRoute.js";
import register from "./src/routes/register.js"
import getData from "./src/routes/getUser.js"

// ####################################################
const app = express();

// ####################################################
app.use(express.json());
app.use(cors());

// ####################################################
app.use(product);
app.use(karyawan);
app.use(login);
app.use(register);
app.use(getData);

// #####################################################
app.use('/', (req, res, next) => {
  res.sendStatus(404);
  next()
});

// ####################################################
app.listen(5000, () => {
    console.log('Server running')
});
