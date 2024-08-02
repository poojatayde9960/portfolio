const express = require("express")
const cors = require("cors")
require("dotenv").config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors({
    // origin: "http://localhost:5173",
    credentials: true
}))  //kontyahi port no vrn data acess kraychga

app.use("/api/user", require("./route/user.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server Error" })
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "SERVER ERROR" })
})

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("server running"))
})


