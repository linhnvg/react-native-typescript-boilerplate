/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import { combineReducers } from 'redux';

import { IAction } from '../types/IAction';
import { CartState } from '../types/stores/cart';
import { ApplicationState } from '../types/stores/app';

import app from './app';
import cart from './cart';

export interface RootState {
  app: ApplicationState;
  cart: CartState;
}

export default combineReducers<RootState, IAction<any>>({
  app,
  cart,
});
