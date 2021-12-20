import express from "express";
import { generateOtp, verifyOtp } from "./otp-ut.js";
import sendMail from "./mail/mail.js";
const Router = express.Router();

Router.post("/otp/generate", (req, res) => {
    const { email } = req.body;
    const otp = generateOtp(email);
    sendMail(email, "Email verification", "otp", { otp })
        .then(() => res.status(200).send({ msg: "OTP was sent successfully." }))
        .catch(() => res.status(400).send({ msg: "The email address is invalid." }));
});

Router.post("/otp/verify", (req, res) => {
    const { otp, email } = req.body;
    const result = verifyOtp(email, otp);

    if (result) res.status(200).send({ msg: "OTP verification successful." });
    else res.status(400).send({ msg: "Invalid OTP." });
});

export default Router;