export type Organization = {
  name: string;
  createdAt: string;
};

export type StrapiOrganization = {
  data: {
    id: number;
    attributes: Organization;
  };
};
