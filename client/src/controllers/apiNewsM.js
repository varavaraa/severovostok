import axios from "axios";
const url = "/api/m_news";

export default class API {

  static async getAllNews() {
    const res = await axios.get(url);
    return res.data;
  }


  static async getNewsByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }


  static async addNews(news) {
    const res = await axios.post(url, news);
    return res.data;
  }


  static async updateNews(id, news) {
    const res = await axios.patch(`${url}/${id}`, news);
    return res.data;
  }


  static async deleteNews(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
