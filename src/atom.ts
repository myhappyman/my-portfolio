import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: "moon",
});

export const IsUp = atom({
  key: "IsUp",
  default: false,
});
