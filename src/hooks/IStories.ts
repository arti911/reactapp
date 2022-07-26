export interface IStories {
    isActive: boolean;
    index: number;
    countStories: number;
    defaultInterval: number; 
    stories: any[];
    onStoryEnd: (index: number, isWatchStories?: boolean) => void;
}