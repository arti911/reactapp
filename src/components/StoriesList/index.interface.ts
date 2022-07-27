type TLink = () => JSX.Element;

export interface IItemList {
  id: number;
  type: string;
  link: string | TLink;
}

export interface IListItem {
  key: number;
  preview: string;
  list: IItemList[]
}

export interface IStoriesList {
  list: IListItem[];
  initialSlide: number;
  setActiveStory: (index: number, isWatch?: boolean) => void;
}
