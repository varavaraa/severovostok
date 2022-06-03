import axios from "axios";
const url = "http://localhost:5000/api/auth/login";

export default class API {
  //Добавление в базу данных
  static  loginUser(user) {
    console.log(user);
    axios.post(url, user).then(req =>{
      localStorage.setItem('token', req.data.token)
    });

  }

 
}
