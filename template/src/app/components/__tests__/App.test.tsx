import * as React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

import { default as App, AppProps } from "../App";

describe("App", () => {
    const props: AppProps = {};

    it("renders the component", () => {
        const wrapper = Enzyme.shallow(<App {...props} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

});