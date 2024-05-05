import axios, { AxiosInstance } from "axios";

const backEndAxiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const serverUrl = "http://localhost:3000";

export default class BackendRequest {
  static async get(url: string, params: any = {}) {
    return backEndAxiosInstance.get(url, { params });
  }

  static async post(url: string, data: any = {}, params: any = {}) {
    return backEndAxiosInstance.post(url, data, { params });
  }

  static async put(url: string, data: any = {}, params: any = {}) {
    return backEndAxiosInstance.put(url, data, { params });
  }

  static async patch(url: string, data: any = {}, params: any = {}) {
    return backEndAxiosInstance.patch(url, data, { params });
  }

  static async delete(url: string, params: any = {}) {
    return backEndAxiosInstance.delete(url, { params });
  }

  async patch(url: string, data: any = {}, params: any = {}) {
    return backEndAxiosInstance.patch(url, data, { params });
  }
}
