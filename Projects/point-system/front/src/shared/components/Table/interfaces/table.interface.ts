export interface TableInterface {
  title?: string;
  headers: string[];
  rows: TableHeadBodyInterface[];
}

export interface TableHeadBodyInterface {
  [value: string]: number | string;
}
