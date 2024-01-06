export type Media = {
  name: string;
  url: string;
};

export type RequisiteType = {
  displayName: string;
  icon: Media;
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
