export interface IMetadata {
  [key: string]: any;
}

export class Metadata {
  data: IMetadata = {};
  constructor(metadata?: IMetadata) {
    if (metadata) {
      this.data = metadata;
    }
  }
  read() {
    return this.data;
  }
}