import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

interface UseQueryType {
  pathname: string;
  url: string;
  params?: object;
}

const useQuerHandler = ({ pathname, url, params }: UseQueryType) => {
  const axios = useAxios();
  return useQuery([pathname], {
    queryFn: () => axios({ url, params }).then((data) => data),
  });
};

export { useQuerHandler };
