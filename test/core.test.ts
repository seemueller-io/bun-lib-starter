import { test, beforeEach, describe, expect } from 'bun:test';
import { Lib } from '../src/lib';
import { State } from '../src/state';
import { Metadata } from '../src/metadata';

describe('Classes Test Suite', () => {
  let lib: Lib;
  let state: State;

  beforeEach(() => {
    lib = new Lib();
    const metadata = new Metadata();
    state = new State({ test: 'data' }, metadata.read());
  });

  describe('Lib', () => {
    test('should put state', () => {
      lib.putState(state);
      const id = Array.from(lib.state.keys())[0];
      expect(lib.getState(id)).toBeDefined();
    });

    test('should get state', () => {
      lib.putState(state);
      const id = Array.from(lib.state.keys())[0];
      expect(lib.getState(id)).toBeDefined();
    });

    test('should remove state', () => {
      lib.putState(state);
      const id = Array.from(lib.state.keys())[0];
      lib.removeState(id);
      expect(lib.getState(id)).toBeUndefined();
    });
  });

  describe('State', () => {
    test('should read state', () => {
      expect(state.read()).toEqual({ test: 'data' });
    });

    test('should update state', () => {
      state.update({ updated: 'data' });
      expect(state.read()).toEqual({ updated: 'data' });
    });

    test('should delete state', () => {
      state.delete();
      expect(state.read()).toBeNull();
    });
  });
});
