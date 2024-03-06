import axios from "axios";


export const appInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})






appInstance.interceptors.response.use(
    (success) => {
        return success;
    }, error =>
    {

        /**
         * {
         *     success: false,
         *     error: 'error message'
         *     details: 'error details'
         * }
         */


        return Promise.resolve(error);
    })
