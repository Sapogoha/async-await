import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

export default (async () => {
  const saving = await GameSavingLoader.load();
  const savedData = new GameSaving(saving);
  return savedData;
})();
