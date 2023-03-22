import { atom } from "recoil";

export const themeSelectIsOpen = atom({
  key: "themeSelectIsOpen",
  default: false,
});

export const themeMode = atom({
  key: "themeMode",
  default: "mars",
});

export const IsTop = atom<boolean>({
  key: "IsTop",
  default: true,
});

export const IsUp = atom<boolean>({
  key: "IsUp",
  default: false,
});

export const WindowSize = atom({
  key: "WindowSize",
  default: [0, 0],
});
