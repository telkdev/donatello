type WithStrapiStructure<T> = {
  id: number;
  attributes: T;
  meta?: any;
};

// add recursion
export function fromStrapiDataStracrture<T>(
  data: WithStrapiStructure<T>
): { id: number } & T {
  return {
    id: data.id,
    ...data.attributes,
  };
}
