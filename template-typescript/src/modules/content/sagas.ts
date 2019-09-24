import { call, put, takeEvery } from "redux-saga/effects";
import { getType, ActionType } from "typesafe-actions";
import { actions } from "./actions";
import { getAppData } from "@src/app/api";
import { ModuleState } from "./reducer";

export function* getData(action: ActionType<typeof actions.getData>) {
    try {
        const data: ModuleState = yield call(getAppData, action.payload);
        yield put(actions.setData(data));
    } catch(e) {
        console.log(e);
    }
}

export const sagas = [
    takeEvery(getType(actions.getData), getData)
];