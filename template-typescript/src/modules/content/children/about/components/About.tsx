import * as React from "react";
import { connect } from "react-redux";
import { State as RootState } from "src/modules/content/parent";
import { getContentState } from "src/modules/content/selectors";
import { NAME } from "../constants";

import "./About.scss";
import * as linkedIn from "./linkedin.png";
import * as gitHub from "./github.png";

export interface AboutProps {
    title: string;
    content: string[];
}
export class About extends React.Component<AboutProps> {
    public render() {
        const { title, content } = this.props; 
        return (
            <section id={NAME} className="box about">
                <header>
                    <h1>{title}</h1>
                </header>
                {
                    content.map((paragraph: any, index: number) => {
                        return <p key={`about-${index}`}>{paragraph}</p>
                    })
                }
                <aside>  
                    <a href="https://www.linkedin.com/in/devinmarra/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedIn Icon" /> Find me on LinkedIn</a>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp; </span>
                    <a href="https://github.com/Devinmarra/devin-marra-resume" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="GitHub Icon" /> View Code on GitHub</a>
                </aside>
            </section>
        );
    }
}

export const mapStateToProps = (state: RootState) => {
    const constProps = { name: NAME };
    const contentState = getContentState(state, constProps);
    if (!contentState) {
        return {
            title: "",
            content: []
        }
    }
    return {
        ...contentState
    };
};

export default connect(
    mapStateToProps,
    null
)(About);