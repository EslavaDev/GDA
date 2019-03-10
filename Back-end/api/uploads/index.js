const { Router } = require("express");
const controller = require("./uploads.controller");

const router = new Router();

router.put("/", [verifyToken], controller.updates);

module.exports = router;
