const router = require("express").Router()
const userController = require("../controller/user.controller")

router
    .get("/get-user", userController.getUsers)
    .post("/contact", userController.contact)
module.exports = router