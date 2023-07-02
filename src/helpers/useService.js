export const useService = () => {
  let url;
  if (process.env.REACT_APP_MODE === "development") {
    url = `http://${process.env.REACT_APP_LOCAL_HOST}:${process.env.REACT_APP_LOCAL_PORT}`;
  } else {
    url = `http://${process.env.REACT_APP_PRODUCTION_HOST}:${process.env.REACT_APP_PRODUCTION_PORT}`;
  }
  return url;
};
