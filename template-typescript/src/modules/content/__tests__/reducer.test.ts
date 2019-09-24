import { reducer } from "../reducer";
import { actions } from "../actions";

describe("content reducers", () => {
    const NAME = "test";

    const state = {
        [NAME]:{}
    } as any;
    const data = {
        title: "test",
        content: ["test"],
        description: "test"
    };
    describe("setData", () => {
        const expected = { [NAME]: { ...state[NAME], content: ["test"], description: "test", title: "test" } };
        const action = actions.setData(data);
        const reduced = reducer(state, action);

        it("sets collapsed state to true", () => {
            expect(action).toBeDefined();
            expect(reduced).toMatchObject(expected);
        });
    });
});
