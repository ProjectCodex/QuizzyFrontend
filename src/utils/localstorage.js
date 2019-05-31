const localStorage = window.localStorage || null;

if (localStorage === null)
  throw new Error("Browser does not meet local storage requirement");

const get = itemName => {
  return JSON.parse(localStorage.getItem(itemName));
};

const set = (itemName, payload) => {
  localStorage.setItem(itemName, JSON.stringify(payload));
  return payload;
};

export default {
    getAuthToken: () => get("authToken"),
    setAuthToken: payload => set("authToken", payload),
    clear: () => localStorage.clear()
};
