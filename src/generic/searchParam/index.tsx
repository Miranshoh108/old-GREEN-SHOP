import { useSearchParams } from "react-router-dom";

interface ParamObject {
  [key: string]: string;
}

const searchParam = () => {
  const [params, setParams] = useSearchParams();

  const getParam = (key: string): string | null => {
    return params.get(key);
  };

  const setParam = (param: ParamObject): void => {
    const newParams = new URLSearchParams(params.toString());

    Object.entries(param).forEach(([key, value]) => {
      newParams.set(key, value);
    });

    setParams(newParams);
  };

  return { getParam, setParam };
};

export { searchParam };
