import Constant from "./Constant";
import React from 'react';
import { getBoarding } from "./utils/BoardingUtils";

export function get(api: string) {
    return async (params?: {}) => {
        const { url, headers } = Constant;
        const boarding = await getBoarding();
        return handleData(fetch(buildParams(url + api, params), {
            headers: {
                ...headers,
                'boarding-pass': boarding||'',
            }
        }))
    }
};

export function post(api: string) {
    return (params?: {}) => {
        return async (queryParams?: {} | string) => {
            const { url, headers } = Constant;
            const boarding = await getBoarding();
            var data = params instanceof FormData ? params : JSON.stringify(params);
            return handleData(fetch(buildParams(url + api, queryParams), {
                method: 'POST',
                body: data,
                headers: {
                    "content-type": "application/json",
                    ...headers,
                    'boarding-pass': boarding||'',
                }
            }))
        }
    }
};


/**
 * 處理接口返回數據
 * @param doAction 
 */
function handleData(doAction: Promise<any>) {
    return new Promise((rs, rj) => {
        doAction.then((res) => {
            //解析 Content-Type
            const type = res.headers.get('Content-Type');
            if ((type || '').indexOf('json') !== -1) {
                return res.json();
            }
            return res.text();

        }).then((result) => {
            console.log(JSON.stringify(result));
            if (typeof result === 'string') {
                throw new Error(result);
            }
            const { code, msg, data: { list = undefined } = {} } = result;
            if(code === 401) {
                return;
            }
            rs(list||result);
        }).catch((err) => {
            console.log(err);
            rj(err);
        })
    })
}

function buildParams(url: string, params?: {}): string {
    let newURL = new URL(url), finalUrl;
    if (typeof params === 'object') {
        for (const [key, value] of Object.entries(params)) {
            newURL.searchParams.append(key, value as string);
        }
        finalUrl = newURL.toString();
    } else if (typeof params === 'string') {
        finalUrl = url.endsWith('/') ? `${newURL}${params}` : `${newURL}/${params}`;
    } else {
        finalUrl = newURL.toString();
    }
    console.log('---buildParams---', finalUrl);
    return finalUrl;
}