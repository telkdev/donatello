import en from "./locales/en.json";
import ua from "./locales/ua.json";

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en;

export default {
  locale: "en",
  messages: {
    "en": en,
    "ua": ua
  },
}
