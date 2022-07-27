import { IItemList } from "../components/StoriesList/index.interface";

export interface IStories {
    isActive: boolean;
    index: number;
    countStories: number;
    defaultInterval: number; 
    stories: IItemList[];
    onStoryEnd: (index: number, isWatchStories?: boolean) => void;
}