import en from "./locales/en.json";
import ukUA from "./locales/ua.json";

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en;
export default defineI18nConfig(() => ({
  locale: "en",
  messages: {
    en: en,
    uk: ukUA,
  },
}));
