import * as React from "react";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallowToJson } from "enzyme-to-json";

import { About, AboutProps, mapStateToProps } from "../About";

Enzyme.configure({ adapter: new Adapter() });

describe("About", () => {
    const props: AboutProps = {
        title: "test",
        content: ["test"]
    };
    it("matches the snapshot correctly", () => {
        const wrapper:Enzyme.ShallowWrapper = Enzyme.shallow(<About {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    describe("mapStateToProps", () => {
        const appState: any = {
            Content: {
                About: {
                    ...props
                }
            }
        }
        it("should pass app state into props", () => {
            expect(mapStateToProps(appState)).toMatchObject(props);
        });
        it("should have a fallback when state is undefined", () => {
            const appState2: any = {
                Content: {
                    About: undefined
                }
            }
            expect(mapStateToProps(appState2)).toMatchObject({title: "", content: []});
        });
    });

});