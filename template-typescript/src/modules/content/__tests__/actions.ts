import { actions } from "../actions";

describe("content actions", () => {
    describe("getData", () => {
        const type = "APP:GET_MODULE_DATA";
        const action = actions.getData("About");
        it("should make the call to load data and pass a payload of string", () => {
            expect(action.type).toBe(type);
            expect(action.payload).toBe("About");
        });
    });
    describe("setData", () => {
        const type = "APP:SET_MODULE_DATA";
        const payload = {
            title: "test",
            content: ["test"]
        };
        const action = actions.setData(payload);
        it("should make the call to set state of type ModuleState", () => {
            expect(action.type).toBe(type);
            expect(action.payload).toMatchObject(payload);
        });
    });
});