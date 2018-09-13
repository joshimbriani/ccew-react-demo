import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '../reducers/rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persistor = persistStore(store)