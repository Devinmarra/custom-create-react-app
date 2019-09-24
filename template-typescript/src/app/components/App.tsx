import * as React from "react";
import * as Top from "@src/modules/top";
import { ErrorBoundary } from "@src/modules/errorBoundary";
import { About } from "@src/modules/content";

import "./App.scss";

export interface AppProps {}

export default class App extends React.Component<AppProps> {
    public render() {
        return (
            <main className="app">
                <ErrorBoundary>
                    <Top.Component />
                </ErrorBoundary>
                <ErrorBoundary>
                    <About.Component />
                </ErrorBoundary>
            </main>
        );
    }
}
