import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
import { filterReducer } from './filterSlice';
import { modalReducer } from './modalSlice';


const filterPersistConfig: PersistConfig<ReturnType<typeof filterReducer>> = {
    key: 'filter',
    storage,
};
const todoPersistConfig: PersistConfig<ReturnType<typeof todoReducer>> = {
    key: 'todos',
    whitelist: ['todos'],
  storage,
};

const persistedFilterReducer = persistReducer(filterPersistConfig, filterReducer);
const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

const store = configureStore({
    reducer: {
        todos: persistedTodoReducer, 
        filter: persistedFilterReducer,
        modal: modalReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                }
    }),
   
    
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
