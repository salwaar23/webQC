import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import userRoute from "./Routes/userRoute.js";
import AuthRoute from "./Routes/AuthRoute.js";
import produkRoute from "./Routes/ProdukRoute.js";
import MasukRoute from "./Routes/MasukRoute.js";
import KeluarRoute from "./Routes/KeluarRoute.js";
import LaporanRoute from "./Routes/LaporanRoute.js";

const app = express();

(async() => {
  await db.sync();
})();

app.use(cors());

app.use(express.json());
app.use(userRoute);
app.use(AuthRoute);
app.use(produkRoute);
app.use(MasukRoute);
app.use(KeluarRoute);
app.use(LaporanRoute);

app.listen(5000, () => {
  console.log('server up and running ...');
});
