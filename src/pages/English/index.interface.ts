export interface ISchema {
  title: string;
  rule: string;
  examples: string[];
}

export interface IDataItem {
  title: string;
  proposalSchemes: ISchema[];
}
