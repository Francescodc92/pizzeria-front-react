import { getCookie } from "../cookie/get-cookie";

export const baseFetch = async (url: string, options: RequestInit = {}) => {
    const xsrfToken = getCookie('XSRF-TOKEN');

    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": xsrfToken || "",
            "Accept": "application/json",
        },
        credentials: "include",
    });

    return response;
};
