import type { StrapiOrganization } from "../organizations/types";
import type { Requisit } from "../requisities";
import type { RichTextBlocks } from "../richText";

export type Category = {
  displayName: string;
  createdAt: string;
};

type StrapiCategory = {
  data: {
    id: number;
    attributes: Category;
  };
};

export type Fund = {
  id: number;
  title: string;
  description: RichTextBlocks[];
  createdAt: string;
  totalGoal: number;
  collectedAmount: number;
  requisites: Requisit[];
  category: StrapiCategory;
  organization: StrapiOrganization;
};
