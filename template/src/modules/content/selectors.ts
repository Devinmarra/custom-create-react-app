import { State as RootState } from "./parent";
import { NAME } from "./constants";

export const getContentState = (state: RootState, props: {name: string}) => state[NAME][props.name];
