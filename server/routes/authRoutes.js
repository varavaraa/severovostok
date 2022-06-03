const express = require("express");
const {check} = require("express-validator");
const router = express.Router();
const API = require("../controllers/api");
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')


router.get("/users", roleMiddleware(['EMPLOYEE']), API.getUsers);
router.post("/login",  API.loginUser);
router.post("/register", [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть от 4 до 10 символов").isLength({min:4, max:10})
],  API.regUser);

module.exports = router;
