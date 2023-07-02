import { getItem, setItem } from "../storage.js";

const todoService = {
  // 1. item불러오기
  getItems() {
    return getItem("todos") || [];
  },

  // 2. 아이
  setItems(nextState) {
    setItem("todos", nextState);
  },
};
