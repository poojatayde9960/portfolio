const router = require("express").Router()
const userController = require("../controller/user.controller")

router
    // .post("/register", authController.registerUser)
    .get("/get-user", userController.getUsers)
    .post("/contact", userController.contact)
module.exports = router