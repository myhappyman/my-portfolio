import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: "moon",
});

export const IsTop = atom<boolean>({
  key: "IsTop",
  default: true,
});

export const IsUp = atom<boolean>({
  key: "IsUp",
  default: false,
});
