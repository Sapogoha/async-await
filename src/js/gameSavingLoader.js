import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    return (async () => {
      const data = await read();
      const value = await json(data);
      return JSON.parse(value);
    })();
  }
}
