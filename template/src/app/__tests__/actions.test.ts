import { actions } from "../actions";

describe("app actions", () => {
    describe("startup", () => {
        const type = "APP:STARTUP";
        const action = actions.startup();
        it("should make the call to load data", () => {
            expect(action.type).toBe(type);
        });
    });
});