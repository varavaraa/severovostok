//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT; // 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    family: 4,
  })
  .then(() => console.log("Соединение с MongoDB есть!"))
  .catch((err) => console.log(err));

//routes prefix
app.use("/api/resume", require("./routes/routes"));
app.use("/api/vacancy", require("./routes/vacancyRoutes"));
app.use("/api/hr_resume", require("./routes/hrResumeRoutes"));
app.use("/api/hr_vacancy", require("./routes/hrVacancyRoutes"));
app.use("/api/m_news", require("./routes/mNewsRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

//Start even http://localhost:5000/
app.listen(port, () => console.log(`Сервер работает на хосте : http://localhost:${port}`));
