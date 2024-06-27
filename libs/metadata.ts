import { Metadata } from "next";

export const getMetadata = (options: Metadata): Metadata => {
  return {
    ...options,
    title:
      (options.title ? options.title + " - " : "") +
      "ANNA & OTTO - Das Familiencafé",
  };
};
