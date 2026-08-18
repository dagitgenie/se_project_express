const router = require("express").Router();
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const NotFoundError = require("../errors/not-found-error");
const {
  validateCreateUserBody,
  validateLogin,
} = require("../middlewares/validation");

router.post("/signup", validateCreateUserBody, createUser);
router.post("/signin", validateLogin, login);
router.get("/items", getItems);

router.use(auth);
router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
