export interface Columns {
  span: number;
  title: string;
  render: (item: any) => React.ReactNode;
}
