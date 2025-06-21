import { defineStore } from "pinia";
import { USER_LIST } from "./consts";

export const useUserStore = defineStore("useUserStore", {
  // 定义数据状态
  state: () => {
    return {
      userList: USER_LIST,
    };
  },
});
