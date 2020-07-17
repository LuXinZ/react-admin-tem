import axios from "axios";
export const get = ({
  url,
  config,
  callback = (res) => res.data,
}) =>
  axios
    .get(url, config)
    .then(callback)
    .catch((err) => {
      console.log(err);
    });
