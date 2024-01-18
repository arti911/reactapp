export interface SchemaDTO {
  title: string;
  rule: string;
  examples: string[];
}

export interface IDataItem {
  title: string;
  proposalSchemes: SchemaDTO[];
}
