require("dotenv").config();

module.exports = {
  connection: process.env.MAIL_CONNECTION || "smtp",
  from: process.env.MAIL_FROM,
  smtp: {
    driver: "smtp",
    host: process.env.MAIL_HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  },
};
