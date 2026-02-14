import axios from "axios";

const entityApi = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default class EntityService {

  async addRecord(record) {
    const response = await entityApi.post("/entity/add", record);
    return response.data;
  }

  async deleteRecord(name) {
    const response = await entityApi.delete(`/entity/delete/${encodeURIComponent(name)}`);
    return response.data;
  }

  async getAllRecords() {
    const response = await entityApi.get("/entity/list");
    return response.data;
  }

  async searchRecords(name) {
    const response = await entityApi.get(`/entity/search/${encodeURIComponent(name)}`);
    return response.data;
  }
}