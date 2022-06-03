import axios from "axios";
const url1 = "/api/resume";
const url2 = "/api/vacancy";
const url3 = "/api/news";

export default class API {
  //Добавление в базу данных
  static async addResume(resume) {
    const res = await axios.post(url1, resume);
    return res.data;
  }

    // Получить все резюме с сервера
    static async getAllVacancy() {
      const res = await axios.get(url2);
      return res.data;
    }

    static async getAllNews() {
      const res = await axios.get(url3);
      return res.data;
    }
  
  
    static async getNewsByID(id) {
      const res = await axios.get(`${url3}/${id}`);
      return res.data;
    }

}
