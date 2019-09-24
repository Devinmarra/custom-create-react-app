import { getType } from "typesafe-actions";
import { actions } from "./actions";
import { AllActions } from "./parent";

export const initialState: State = {
    height: 0,
};

export interface State {
    height: number;
}

export const reducer = (state: State = initialState, action: AllActions) => {
    switch (action.type) {
        case getType(actions.setHeight):
            return { ...state, height: action.payload };
        default: 
            return state;
    }
}