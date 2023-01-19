import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import mainRouter from "./routes/route.js";
import MongoStore from "connect-mongo";
import config from "./config/index.js";

const time = 180;

const mgoStore = {
  store: MongoStore.create({
    mongoUrl: config.MONGO_ATLAS_URL,
    crypto: {
      secret: "1234",
    },
  }),
  secret: "secret",
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: time * 1000,
  },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(mgoStore));

app.use("/", mainRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Todo bien`);
});