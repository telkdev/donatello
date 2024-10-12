import type { WithStrapiStructure } from "~/utilities/strapiDataStructure";
import type { StrapiOrganization } from "../organizations/types";
import type { Media, StrapiRequisite } from "../requisites/types";
import type { RichTextBlocks } from "../richText";

export type localeList = "uk" | "en";

export type LocaleField = {
  id: number;
} & {
  [key in localeList]: string;
};

export type Category = {
  displayName: LocaleField;
  createdAt: string;
  icon: {
    data: WithStrapiStructure<Media>;
  };
  description: LocaleField;
};

type StrapiCategory = {
  data: {
    id: number;
    attributes: Category;
  };
};

type StrapiDocuments = {
  data: {
    id: number;
    attributes: Media;
  }[];
};

export type Fund = {
  id: number;
  image: {
    data: WithStrapiStructure<Media>;
  };
  title: string;
  slug: string;
  description: RichTextBlocks[];
  createdAt: string;
  locale: string; // TODO: add as const
  localizations: {
    data: WithStrapiStructure<Fund>[];
  };
  totalGoal: number;
  collectedAmount: number;
  requisites: StrapiRequisite;
  documents: StrapiDocuments;
  category: StrapiCategory;
  organization: StrapiOrganization;
};
