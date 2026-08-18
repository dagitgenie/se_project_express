const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const { JWT_SECRET = "dev-secret" } = process.env;

module.exports = {
  JWT_SECRET,
};
