import * as React from "react";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallowToJson } from "enzyme-to-json";

import { Top, TopProps, mapStateToProps, mapDispatchToProps } from "../Top";

Enzyme.configure({ adapter: new Adapter() });

describe("About", () => {
    const props: TopProps = {
        setComponentHeight: jest.fn(),
        height: 0
    };
    it("matches the snapshot correctly", () => {
        const wrapper:Enzyme.ShallowWrapper = Enzyme.shallow(<Top {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    describe("mapStateToProps", () => {
        const appState: any = {
            Top: {
                height: 0
            }
        }
        it("should pass app state into props", () => {
            expect(mapStateToProps(appState)).toMatchObject({height: 0});
        });
      
    });
    describe("mapDispatchToProps", () => {
        describe("setComponentHeight", () => {
            const dispatch = jest.fn();
            mapDispatchToProps(dispatch).setComponentHeight(10);
            const mock = dispatch.mock.calls[0][0];
            it("sets new state to the value received", () => {
                expect(mock.type).toBe("TOP:SET_HEIGHT");
                expect(mock.payload).toBe(10);
            });
        });
    });

});