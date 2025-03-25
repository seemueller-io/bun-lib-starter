export type Uuid = string;

export type ILibState = Map<Uuid, IState>;

export type IRequiredMetadata = { timestamp: number };

export type IMetadata = IRequiredMetadata & Record<string, any>;

export type IData = unknown;

export interface StateProps {
  data: IData;
  metadata: IMetadata;
}

export interface IState extends StateProps {
  readData(): any;
  updateData(data: IData): void;
}
