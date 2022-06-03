const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const Resume = require("../models/resume");
const User = require("../models/user");
const Role = require("../models/role");
const Vacancy = require("../models/vacancy");
const News = require("../models/news");
const fs = require("fs");

const {validationResult} = require('express-validator')
const { resume } = require("../routes/routes");



module.exports = class API {

  //async-await - для асинхронной работы mongoose

  //ЛОГИКА РЕГИСТРАЦИИ И АВТОРИЗАЦИИ ПОЛЬЗОВАТЕЛЕЙ
   static async regUser(req, res){
     //Проверка валидации: если ввод осуществлен не правильно, выводим ошибки
     const errors = validationResult(req)
     if (!errors.isEmpty()) {
       return res.status(400).json({message:"Ошибка при регистрации", errors})
     }
    //определение кандидата на регистрацию, передаем имя пользователя и пароль
    const candidate = await User.findOne({username: req.body.username})
    //проверка кандидата
    if (candidate){
      //пользователь сущестрвует, отправляется ошибка (409 Conflict)
      res.status(409).json({message: 'Такое имя пользователя уже существует, попробуйте другой.'})
    } else{
      //нужно создать пользователя
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        //получаем из запроса имя и пароль
        username: req.body.username,
        password: bcrypt.hashSync(password, salt),
        roles: "MODERATOR"
      })
      try {
        await  user.save()
        //ответ (201  Created)
        res.status(201).json(user)
      } catch (e) {
        res.status(400).json({message:  e.message })
        
      } 
    }
  }

  static async loginUser(req, res){
    console.log(req.body);
    const candidate = await User.findOne({username: req.body.username})
    console.log(candidate);
    if (candidate){
      //Проверка пароля, пользователь существует
      //compareSync: Первым аргументом передаем пароль из запроса, вторым - хешированный пароль
      const passwordResult = bcrypt.compareSync(req.body.password,candidate.password)
      if(passwordResult){
        //Генерация JWT токена, пароли совпали
        //Первый аргумент: информация, которую хотим спрятать
        //Второй аргумент: секретный ключ, раположенный в .env
        //Третий аргумент: время жизни токена - 1 час
        const token = jwt.sign({
          username: candidate.username,
          roles: candidate.roles,
          userId: candidate._id
        }, process.env.JWT_KEY, {expiresIn: 60*60})

        res.status(200).json({
          token: `Bearer ${token}`
        })
      }
       else{
        //Пароли не совпали, ошибка (401 Unauthorize)
        res.status(401).json({message:'Пароли не совпадают, попробуйте снова'})
      }

    } else{
      //Пользователя нет, ошибка (404 Not Found)
      res.status(404).json({message:'Пользователь с таким именем не найден'})
    }

  }

  static async getUsers(req, res){

    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //СТРАНИЦА КАДРОВОГО СОТРУДНИКА, НА КОТОРОЙ: ВЫВОД СПИСКА РЕЗЮМЕ(fetchAllResume),
  //ПОЛУЧЕНИЕ(fetchResumeByID) И УДАЛЕНИЕ (deleteResume) РЕЗЮМЕ ПО ID
  static async fetchAllResume(req, res) {
    try {
      const resume = await Resume.find();
      res.status(200).json(resume);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async fetchResumeByID(req, res) {
    const id = req.params.id;
    try {
      const resume = await Resume.findById(id);
      res.status(200).json(resume);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async deleteResume(req, res) {
    const id = req.params.id;
    try {
      const result = await Resume.findByIdAndDelete(id);
      if (result.fileResume != "") {
        try {
          fs.unlinkSync("./uploads/" + result.fileResume);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: "Resume deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //СТРАНИЦА /VACANCY НА САЙТЕ, НА КОТОРОМ: ОТПРАВКА РЕЗЮМЕ(createResume)

  static async createResume(req, res) {
    const resume = req.body;
    const resumefilename = req.file.filename;
    resume.fileResume = resumefilename;
    try {
      await Resume.create(resume);
      res.status(201).json({ message: "Resume created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  //Общие запросы
  static async fetchAllVacancy(req, res) {
    try {
      const vacancy = await Vacancy.find();
      res.status(200).json(vacancy);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async fetchVacancyByID(req, res) {
    const id = req.params.id;
    try {
      const vacancy = await Vacancy.findById(id);
      res.status(200).json(vacancy);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async createVacancy(req, res) {
    const vacancy = req.body;
    try {
      await Vacancy.create(vacancy);
      console.log(req.body)
      res.status(201).json({ message: "Vacancy created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

 

  static async deleteVacancy(req, res) {
    const id = req.params.id;
    try {
      const result = await Vacancy.findByIdAndDelete(id);
      res.status(200).json({ message: "Vacancy deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async updateVacancy(req, res) {
    const id = req.params.id;

    const newVacancy = req.body;
    try {
      await Vacancy.findByIdAndUpdate(id, newVacancy);
      res.status(200).json({ message: "Vacancy update successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //НОВОСТНОЙ РАЗДЕЛ

  static async fetchAllNews(req, res) {
    try {
      const news = await News.find();
      res.status(200).json(news);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async fetchNewsByID(req, res) {
    const id = req.params.id;
    try {
      const news = await News.findById(id);
      res.status(200).json(news);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async createNews(req, res) {
    const news = req.body;
    const imagename = req.file.filename;
    news.image = imagename;
    try {
      await News.create(news);
      res.status(201).json({ message: "News created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async updateNews(req, res) {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlink("./uploads/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newNews = req.body;
    newNews.image = new_image;

    try {
      await News.findByIdAndUpdate(id, newNews);
      res.status(200).json({ message: "News update successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async deleteNews(req, res) {
    const id = req.params.id;
    try {
      const result = await News.findByIdAndDelete(id);
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: "News deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }


};
