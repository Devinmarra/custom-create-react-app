import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { getStore, configureStore } from "./store";
import { actions } from "./app";
import { App } from "./app";

configureStore();

const ReduxApp: React.SFC = () => (
    <Provider store={getStore()}>
        <App />
    </Provider>
);
getStore().dispatch(actions.startup());

ReactDOM.render(<ReduxApp />, document.getElementById('root') as HTMLElement);
