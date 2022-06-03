require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = function (roles) {
    return async function (req, res, next) {
        
        if (req.method === "OPTIONS"){
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
            //если пользователь не авторизован, выводим ошибку (403 Forbidden)
            return res.status(403).json({message: "Пользователь не авторизован"})   
            }
            //Из токена получаем массив ролей, а также декодируем токен
            const {roles: userRoles} = jwt.verify(token, process.env.JWT_KEY)
            //Есть ли в списке ролей, те роли, которые разрешены для этой ф-ии
            let hasRole = false
            await userRoles.forEach(role => {
                if(roles.includes(role)){
                    hasRole = true
                }
            })
            if (!hasRole) {
                //у пользователя нет прав доступа, выводим ошибку (403 Forbidden)
                return res.status(403).json({message: "У вас нет доступа"})
            }
            next()
        } catch (e) {
            console.log(e)
            //если пользователь не авторизован, выводим ошибку (403 Forbidden)
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
};