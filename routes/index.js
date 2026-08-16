const router = require("express").Router();
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const { NOT_FOUND } = require("../utils/errors");

router.post("/signup", createUser);
router.post("/signin", login);
router.get("/items", getItems);

router.use(auth);
router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
