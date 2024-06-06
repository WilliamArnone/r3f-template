import "i18next";

import default_en from "@locales/en/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    //defaultNS: "default";
    resources: {
      translation: typeof default_en;
    };
  }
}
