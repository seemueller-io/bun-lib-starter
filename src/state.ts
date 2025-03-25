import { IMetadata } from './types';

export interface IState {
  data: any;
  metadata: IMetadata;
}

export interface IData {
  [key: string]: any;
}

export class State {
  data: IData;
  metadata: IMetadata;
  constructor(data: IData, metadata: IMetadata) {
    this.data = data;
    this.metadata = metadata;
  }
  read() {
    return this.data !== null ? this.data : null;
  }
  update(data: IData) {
    this.data = data;
  }
  delete() {
    this.data = null;
  }
}