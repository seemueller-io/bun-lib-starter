export interface ILibState {
  [key: string]: any;
}

export class Lib {
  state: ILibState = new Map();
  constructor(state?: ILibState) {
    if (state) {
      this.state = state;
    }
  }
  private generate() {
    return {
      uuid: () => crypto.randomUUID(),
    };
  }
  public getUuid(): string {
    return this.generate().uuid();
  }
  putState(state: any) {
    this.state.set(this.getUuid(), state);
  }
  getState(id: string) {
    return this.state.get(id);
  }
  getAll() {
    return this.state.entries();
  }
  removeState(id: string) {
    this.state.delete(id);
  }
}
