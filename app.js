const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "409976504396-6umtm8j8134una3qlkrh89232thbbo3c.apps.googleusercontent.com", 
    "znljvTyjXXTBQTSNH57wEakC", 
    "https://developers.google.com/oauthplayground" 
);

oauth2Client.setCredentials({
    refresh_token: "1//04YLQuXce8mWZCgYIARAAGAQSNwF-L9IrD7nQb_j_4JHAL075ywI17O-p7BoOAvDGLqHT7Y2zyXKc34wxvOxA1cuLCRtMJHYbOB0"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "shivam.shah2708@gmail.com", 
         clientId: "409976504396-6umtm8j8134una3qlkrh89232thbbo3c.apps.googleusercontent.com",
         clientSecret: "znljvTyjXXTBQTSNH57wEakC",
         refreshToken: "1//04YLQuXce8mWZCgYIARAAGAQSNwF-L9IrD7nQb_j_4JHAL075ywI17O-p7BoOAvDGLqHT7Y2zyXKc34wxvOxA1cuLCRtMJHYbOB0",
         accessToken: accessToken
    }
});

const mailOptions = {
    from: "shivam.shah2708@gmail.com",
    to: "shivamcodm@gmail.com",
    subject: "GMAIL REST API",
    generateTextFromHTML: true,
    html: "<b>Mail Sent successfully</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) 
    : 
    console.log(response);
    smtpTransport.close();
});