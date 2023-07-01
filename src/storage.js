const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    // 정보 저장!
    storage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key); // 값을 key로 꺼내온다.

    if (storedValue) {
      // 값이 있을경우!
      return JSON.parse(storedValue); // JSON.parse해준다.
    }
    return defaultValue;
  } catch (e) {
    // error일경우..! out
    console.log(e);
    return defaultValue;
  }
};
