import axios from "axios";

export class API {
  baseUrl;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  query({ method, url = "", header, body, data }) {
    return axios(`${this.baseUrl}${url}`, {
      method,
      headers: {
        "Content-type": "application/json",
        ...header,
      },
      params: body,
      data: data,
    });
  }

  queryGET(url, body, header) {
    return this.query({
      method: "GET",
      url,
      body,
      header,
    });
  }
}
