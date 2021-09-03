export interface IInformation {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: Array<string>;
}

export interface ISegments {
  segments: Array<IInformation>;
}
