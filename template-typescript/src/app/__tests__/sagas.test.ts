import { expectSaga, testSaga } from "redux-saga-test-plan";
import { startup } from "../sagas";
import * as content from "src/modules/content";
import { actions } from "../actions";
import { getInitModules } from "src/modules/content";
import { call } from "redux-saga/effects";

describe("Startup", () => {
    it("should fetch data for all sections", () => {
        return expectSaga(startup, actions.startup())
            .provide([
                [call(getInitModules), ["test"]]
            ])
            .put(content.actions.getData("test"))
            .run();
    });
    it("should console log when there's an error", () => {
        const action = actions.startup();
        const saga = testSaga(startup, action);
        const testError: Error = { name: "test error", message: "test message" };
        expect(
            saga
                .next()
                .throw(testError)
                .next()
            .isDone
        )
    });
});