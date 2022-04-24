const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

router.get("/", auth, (req, res) => {
  req.user.admin
    ? res.send("Só pode ser visto por Admin.")
    : res.status(401).send("Not admin. Access denied");
});

router.get("/logged", auth, (req, res) => {
  req.user
    ? res.send("Só pode ser visto por quem estiver logado.")
    : res.status(401).send("Not logged. Access denied");
});
module.exports = router;
