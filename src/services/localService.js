export const localService = {
  setUserInfo: (values) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
  },
  getUserInfo: () => {
    if (localStorage.getItem("userInfo")) {
      return JSON.parse(localStorage.getItem("userInfo"));
    }
    localStorage.setItem("userInfo", "");
  },
  removeUserInfo: () => {
    localStorage.setItem("userInfo", "");
  },
};
