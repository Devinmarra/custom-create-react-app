import { getType } from "typesafe-actions";
import { actions, Action } from "./actions";
import { AllActions } from "./parent";

export const initialState: ModuleState = {
    title: "",
    content: []
};

export interface ModuleState {
    title: string;
    content: any[]; 
    description?: string;
}

export interface State {
    [index: string]: ModuleState | undefined;
}

export const contentReducer = (state: ModuleState = initialState, action: AllActions) => {
    switch (action.type) {
        case getType(actions.setData):
            return { ...state, ...action.payload };

        default: 
            return state;
    }
}


export const reducer = (state: State = {}, action: AllActions) => {
    
    if (action.type === "APP:SET_MODULE_DATA") {
        const key = action.payload.title;
        const nextState = contentReducer(state[key], action as Action);
        return { ...state, [key]: nextState };
    
    }

    return state;
}