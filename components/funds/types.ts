import type { WithStrapiStructure } from "~/utilities/strapiDataStructure";
import type { StrapiOrganization } from "../organizations/types";
import type { Media, StrapiRequisite } from "../requisites/types";
import type { RichTextBlocks } from "../richText";

export type Category = {
  displayName: string;
  createdAt: string;
  icon: {
    data: WithStrapiStructure<Media>;
  };
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
  totalGoal: number;
  collectedAmount: number;
  requisites: StrapiRequisite;
  documents: StrapiDocuments;
  category: StrapiCategory;
  organization: StrapiOrganization;
};
