export interface IInformation {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

export interface ISegments {
  segments: IInformation[];
}
