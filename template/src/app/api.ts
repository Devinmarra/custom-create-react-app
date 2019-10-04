
export const appDataApi = (request: string) => {
    // this is a mock so that we can preserve redux patterns even though we are using static data
    const mockData = require(`@src/data/appData.json`);
    return mockData[request];
}


export const getAppData = (request: string) => {
    return new Promise((resolve, reject) => {
        const func = () => {
            const data = appDataApi(request);
            data ? resolve(data) : reject(new Error("no data"))
        };
        setTimeout(func, 500)
    });
}