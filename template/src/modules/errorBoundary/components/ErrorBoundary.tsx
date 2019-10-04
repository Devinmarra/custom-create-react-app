import * as React from "react";
 
interface AppErrorState {
    hasError: boolean;
}
 
interface AppErrorProps {
    className?: string;
}
 
export class ErrorBoundary extends React.Component<AppErrorProps, AppErrorState> {
    public readonly state: AppErrorState = { hasError: false };

 
    public componentDidCatch() {
        this.setState({ hasError: true });
    }
 
    public render() {
        if (this.state.hasError) {
            return <div className={this.props.className}>An Error Has Occurred</div>;
        }
        return this.props.children;
    }
}
