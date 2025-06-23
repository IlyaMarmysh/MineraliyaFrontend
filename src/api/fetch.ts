import {IFetchGetParams, IFetchMutateParams} from "@/types/api.types";
import {deleteCookie} from "cookies-next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMutate = async ({
                                      body,
                                      url,
                                      method,
                                      token,
                                      contentType = "application/json",
                                  }: IFetchMutateParams) => {
    return await fetch(`${API_URL}${url}`, {
        method: method,
        cache: "no-cache",
        body: JSON.stringify(body),
        headers: token
            ? {
                Authorization: `Bearer ${token}`,
                "Content-Type": contentType,
                Accept: "application/json",
            }
            : {
                "Content-Type": contentType,
                Accept: "application/json",
            },
    })
        .then((response) => {
            if (response.status == 429) {
                // toast.error("Слишком много запросов");
                console.error("Too many requests");
                return;
            }
            return response.json();
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchGET = async ({ url, token}: IFetchGetParams) => {

    return await fetch(`${API_URL}${url}`, {

        cache: "no-cache",
        headers: token
            ? {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            }
            : {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
    })
        .then((response) => {
            if (response.status == 429) {
                // toast.error("Слишком много запросов");
                console.error("Too many requests");
                return;
            } else if (response.status == 401) {
                deleteCookie("token");
                if (window && window.location) window.location.reload();
                return;
            }
            return response.json();
        })
        .catch((err) => {
            throw err;
        });
};