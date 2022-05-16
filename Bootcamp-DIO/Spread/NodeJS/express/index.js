const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);
app.get("/", (req, res) => res.send("Olá mundo express"));

app.listen(PORT, () => console.log(`Running on the PORT ${PORT}`));
