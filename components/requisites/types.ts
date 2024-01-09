export type Media = {
  name: string;
  url: string;
  alternativeText: string;
};

export type RequisiteType = {
  displayName: string;
  icon: StrapiMedia;
};

export type StrapiRequisiteType = {
  data: {
    id: number;
    attributes: RequisiteType;
  };
};

export type StrapiMedia = {
  data: {
    id: number;
    attributes: Media;
  };
};

export type Requisite = {
  owner: string;
  value: string;
  document: StrapiMedia;
  requisite_type: StrapiRequisiteType;
};

export type StrapiRequisite = {
  data: {
    id: number;
    attributes: Requisite;
  }[];
};
