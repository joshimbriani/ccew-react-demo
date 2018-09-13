import * as types from './actionTypes';

export function saveBoard(board) {
    return {
        type: types.SAVE_BOARD,
        board: board
    };
}

export function purgeBoard() {
    return {
        type: types.PURGE_BOARD
    }
}