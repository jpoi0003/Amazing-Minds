import en from "./en";
import zh from "./zh";
import ms from "./ms";

export const translations = {
  en,
  zh,
  ms,
};

export type Language = keyof typeof translations;