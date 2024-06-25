import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { toast } from "sonner";

interface CurrentUser {
  _id: string;
}

export class HttpClient {
  private static serverURL = "http://localhost:8000";
  private static headers: Record<string, string> = {};
  private static bearer: string = "";
  private static csrf: string = "";

  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: HttpClient.serverURL,
    headers: HttpClient.headers,
  });

  private userId: string;

  constructor() {
    this.userId = HttpClient.initializeUserId();
  }

  private static initializeUserId(): string {
    const user = localStorage.getItem("currentUser");
    if (user === null) return "";
    const currentUser: CurrentUser = JSON.parse(user);
    return currentUser._id;
  }

  static async get<T>(url: string | ((userId: string) => string)): Promise<T> {
    const path =
      typeof url === "string" ? url : url(HttpClient.initializeUserId());

    try {
      const response = await HttpClient.axiosInstance.get<T>(path);
      return response.data;
    } catch (error) {
      HttpClient.errorHandler(error, path, "GET");
      throw error;
    }
  }

  public static async post<T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await HttpClient.axiosInstance.post<T>(
        url,
        data,
        config
      );
      return response.data;
    } catch (error) {
      HttpClient.errorHandler(error, url, "POST");
      toast.info((error as any).response.data.message);
      throw error;
    }
  }

  public static async patch<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await HttpClient.axiosInstance.patch<T>(url, data);
      return response.data;
    } catch (error) {
      HttpClient.errorHandler(error, url, "PATCH");
      throw error;
    }
  }

  public static async put<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await HttpClient.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      HttpClient.errorHandler(error, url, "PUT");
      throw error;
    }
  }

  public static async delete<T>(url: string): Promise<T> {
    try {
      const response = await HttpClient.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      HttpClient.errorHandler(error, url, "DELETE");
      throw error;
    }
  }

  private static errorHandler(error: any, url: string, method: string): void {
    toast.error(error.message || "Une erreur est survenue");
    console.info(
      `[${method} on ${url}] une erreur est survenue pendant la requête`,
      error
    );
  }
}

export default HttpClient;
