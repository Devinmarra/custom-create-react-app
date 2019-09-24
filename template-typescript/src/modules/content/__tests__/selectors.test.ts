import * as selectors from "../selectors";

describe("getContentState ", () => {
    const state: any = {
        Content: {
            TEST: {
                success: true
            }
        }
    };
    const props = { name: "TEST"};

    it("should content state", () => {
        const selected = selectors.getContentState(state, props);
        expect(selected).toBeDefined();
        expect(selected).toMatchObject(state.Content.TEST);
    });
});