import { createStandardAction, ActionType } from "typesafe-actions";

const SET_HEIGHT = "TOP:SET_HEIGHT";

export const actions = {
    setHeight: createStandardAction(SET_HEIGHT)<number>(),
};

export type Action = ActionType<typeof actions>;