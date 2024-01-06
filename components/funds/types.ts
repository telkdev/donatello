import type { StrapiOrganization } from "../organizations/types";
import type { StrapiRequisite } from "../requisites/types";
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
  slug: string;
  description: RichTextBlocks[];
  createdAt: string;
  totalGoal: number;
  collectedAmount: number;
  requisites: StrapiRequisite;
  category: StrapiCategory;
  organization: StrapiOrganization;
};
