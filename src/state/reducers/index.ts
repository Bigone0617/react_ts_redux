import { combineReducers } from "redux";
import BankReducer from './bankReducers';

const reducers = combineReducers({
    bank : BankReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;