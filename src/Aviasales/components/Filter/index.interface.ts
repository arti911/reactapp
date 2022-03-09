export default interface IFilter {
  title: string;
  items: Array<string>;
  clickFilterHandler: (stops: Array<string>) => void;
}
