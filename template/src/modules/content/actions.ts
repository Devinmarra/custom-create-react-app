import { createStandardAction, ActionType } from "typesafe-actions";
import { ModuleState } from "./reducer";

const GET_MODULE_DATA = "APP:GET_MODULE_DATA";
const SET_MODULE_DATA = "APP:SET_MODULE_DATA";

export const actions = {
    getData: createStandardAction(GET_MODULE_DATA)<string>(),
    setData: createStandardAction(SET_MODULE_DATA)<ModuleState>()
};

export type Action = ActionType<typeof actions>;