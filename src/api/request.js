import axios from "axios";
import { get } from "./index";

export const login = (username, password) =>
  get({
    url: `http://127.0.0.1:3210/login`,
    config: {
      params: {
        name: username,
        password: password,
      },
    },
  });
