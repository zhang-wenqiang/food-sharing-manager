//存、取、删，token方法

const key = "pc-key";

const setToken = (token) => {
  return window.localStorage.setItem(key, token);
};
const getToken = () => {
  return window.localStorage.getItem(key);
};
const deleteToken = () => {
  return window.localStorage.removeItem(key);
};

export { setToken, getToken, deleteToken };
