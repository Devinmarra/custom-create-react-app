import { createStandardAction, ActionType } from "typesafe-actions";

const STARTUP = "APP:STARTUP";

export const actions = {
    startup: createStandardAction(STARTUP)()
};

export type Action = ActionType<typeof actions>;