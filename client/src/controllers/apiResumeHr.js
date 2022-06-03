import axios from "axios";
const url = "/api/hr_resume";

export default class API {
  // Получить все резюме с сервера
  static async getAllResume() {
    const res = await axios.get(url);
    return res.data;
  }

  // Получить одно резюме с сервера
  static async getResumeByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  // Удалить одно резюме с сервера
  static async deleteResume(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
