import axios from "axios";
const url = "/api/hr_vacancy";

export default class API {
  // Получить все резюме с сервера
  static async getAllVacancy() {
    const res = await axios.get(url);
    return res.data;
  }

  // Получить одно резюме с сервера
  static async getVacancyByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  static async addVacancy(vacancy) {
    const res = await axios.post(url, vacancy);
    return res.data;
  }

  static async updateVacancy(id, vacancy) {
    const res = await axios.patch(`${url}/${id}`, vacancy);
    return res.data;
  }

  // Удалить одно резюме с сервера
  static async deleteVacancy(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}