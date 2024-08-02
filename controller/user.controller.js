const User = require("../models/User")
const { sendEmail } = require("../utils/email")
const asyncHandler = require("express-async-handler")

exports.contact = asyncHandler(async (req, res) => {
    try {
        await User.create(req.body);
        await sendEmail({
            to: req.body.email,
            subject: " SUCCESS",
            message: "frhkkrfjdknclxhvefdbkjnlk"
        });

        res.status(201).json({ message: "User email sent" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: " error ", error: error.message });
    }
});

exports.getUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({ message: "User Fetch Success", result })
})

// exports.contactUser = asyncHandler(async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         res.status(200).json({ message: "Contact information received", data: { name, email, message } });
//     } catch (error) {
//         res.status(500).json({ message: "error ", error: error.message });
//     }
// });
