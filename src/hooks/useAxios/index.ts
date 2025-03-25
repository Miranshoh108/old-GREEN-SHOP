import axios from "axios";

interface PropsTypes {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: object;
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const response = (props: PropsTypes) => {
    const { url, method = "GET", body, headers, params } = props;
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params: {
        access_token: "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
    })
      .then((data) => data.data.data)
  };
  return response;
};
