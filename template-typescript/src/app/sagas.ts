import { call, takeLatest, put, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { actions } from "./actions";
import * as content from "src/modules/content";
import { getInitModules } from "src/modules/content/utilities";


export function* startup() {
    try {
        const modules: string[] = yield call(getInitModules);
        yield all(modules.map((component) => put(content.actions.getData(component))));
    } catch(e) {
        console.log(e);
    }
}

export const sagas = [
    takeLatest(getType(actions.startup), startup)
];