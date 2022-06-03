require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS"){
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
        //если пользователь не авторизован, выводим ошибку (403 Forbidden)
        return res.status(403).json({message: "Пользователь не авторизован"})   
        }
        const decodedData = jwt.verify(token, process.env.JWT_KEY)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        //если пользователь не авторизован, выводим ошибку (403 Forbidden)
        return res.status(403).json({message: "Пользователь не авторизован"})
    }

}