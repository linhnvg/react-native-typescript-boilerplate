/**
 * Thunks are a great place for application business logic
 */
import { AppDispatch } from '../store';
import { RootState } from '../reducers';
import Config from '../../../src/config';
import Storage from '../../services/core/storage';
import { searchInitiated } from '../actions/search';
import { SearchState } from '../types/stores/search';
import { SearchService } from '../../services/search';

export const searchRequested = (data: SearchState) => async (dispatch: AppDispatch, getState: () => RootState) => {
  if (data.query.trim().length === 0) return {};
  dispatch(searchInitiated(data));
  const result = await SearchService.fetch(data.query);

  Storage.set(Config.Keys.recentSearches, getState().search.list);

  return result;
};
