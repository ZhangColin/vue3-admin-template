import { defineStore } from 'pinia';

const useSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
      refresh: false,
    };
  },
});

export default useSettingStore;
