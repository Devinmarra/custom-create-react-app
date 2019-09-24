import * as appApi from "../api";

describe("getAppData", () => {
    it("resolves when there is data", async () => {
        await expect(appApi.getAppData("About")).resolves;
    });
    it("rejects when there is nodata", async () => {
        await expect(appApi.getAppData("Nothing")).rejects.toThrow("no data");
    });
});