import { getInitModules } from "../utilities";

describe("utilities", () => {
    it("gets init modules", () => {
        const expected: string[] = [
            "About"
        ];
        expect(getInitModules()).toMatchObject(expected);
    });
});