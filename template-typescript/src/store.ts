import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";
import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import * as app from "@src/app";
import * as content from "@src/modules/content";
import * as top from "@src/modules/top";

const rootReducer = combineReducers({
    [content.constants.NAME]: content.reducer,
    [top.constants.NAME]: top.reducer
});

export interface State {
    [content.constants.NAME]: content.State;
    [top.constants.NAME]: top.State;
}

export type AllActions = 
    | app.Action
    | content.Action
    | top.Action;

export function* sagas() {
    yield all([
        ...content.sagas,
        ...app.sagas
    ]);
}

const sagaMiddleware = createSagaMiddleware();

let store: Store<State>;

export function configureStore(initialState?: State) {
    const middlewares = [sagaMiddleware];
    const enhancer = composeWithDevTools({
        actionSanitizer: (action: any) => {
            return action;
        },
        stateSanitizer: (state: State) => {
            return { ...state };
        }
    } as EnhancerOptions);
    const newStore = createStore(rootReducer, initialState!, enhancer(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    store = newStore;
}

export const getStore = () => store;

export default getStore;