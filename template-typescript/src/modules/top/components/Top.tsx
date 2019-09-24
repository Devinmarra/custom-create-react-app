import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actions } from "../actions";
import * as parent from "../parent";

import { getTopState } from "../selectors";
import "./Top.scss";
import logo from "./logo.svg";

export interface TopProps {
    setComponentHeight: (val: number) => void;
    height: number;
}

export class Top extends React.Component<TopProps> {

    public render() {
        
        return (
            <section className="top">
                <figure>
                    <img src={logo} className="App-logo" alt="logo" />
                </figure>
                <p>Hello. Welcome to the custom app.</p>
            </section>
        );
    }
}

export const mapStateToProps = (state: parent.State) => {
    const topState = getTopState(state);
    return {
        height: topState.height,
    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => { 
    return {
        setComponentHeight: (val: number) => {
            dispatch(actions.setHeight(val));
        },
    }; 
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top);

