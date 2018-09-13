import initialState from './initialState';
import { SAVE_BOARD, PURGE_BOARD } from '../actions/actionTypes';

export default function boardReducer(state = initialState.board, action) {
    let newState;
    switch (action.type) {
        case SAVE_BOARD:
            newState = {board: action.board};
            return newState;
        case PURGE_BOARD:
            return initialState.board;
        default:
            return state;
    }
}