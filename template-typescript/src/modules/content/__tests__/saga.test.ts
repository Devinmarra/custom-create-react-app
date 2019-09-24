import { testSaga } from "redux-saga-test-plan";
import { getData } from "../sagas";
import { actions } from "../actions";
import { getAppData } from "@src/app/api";
import { ModuleState } from "../reducer";

describe("getData", () => {
    it("should call getAppData with action payload, then set data with the result", () => {
        const action = actions.getData("Test");
        const saga = testSaga(getData, action);
        const data: ModuleState = {
            title: "test",
            content: ["test"]
        };
        expect(
            saga
                .next()
                .call(getAppData, action.payload)
                .next(data)
                .put(actions.setData(data))
                .next()
            .isDone
        )
    });
    it("should console log when there's an error", () => {
        const action = actions.getData("");
        const saga = testSaga(getData, action);
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