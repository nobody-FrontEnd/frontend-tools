/*
 * @Description: Axios 请求封装
 * @version:
 * @Author: 周正顺<zhou.zhengshun@h3c.com>
 * @Date: 2022-04-08 08:58:35
 */
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import axios from 'axios';
import { Message } from '@arco-design/web-react';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface AxiosResponseData {
    data: any;
    status?: string;
    message?: string;
    page?: {
        current: number;
        pageSize: number;
        total: number;
    } | null;
}
export interface ExtendsAxiosRequestConfig extends AxiosRequestConfig {
    setupAxios?: boolean;
}

interface ConfigParams {
    /** 后台正常返回状态码 */
    OK_STATUS?: string | number;
    /** 前端不需要显示的错误信息 */
    NO_MESSAGE_ERROR?: any;
    /** Token前缀 */
    TOKEN_PREFIX_STR?: string;
    /** 是否采用模拟数据 */
    IS_MOCK?: boolean;
    /** TOKEN Key */
    TOKEN_KEY?: string;
}

let instance: AxiosInstance = axios.create({});

/**
 * @description:由于后台正常状态码和不用显示错误信息的返回值每个项目可能不一致，这里不能直接写死成常量
 * @param axiosConfig ： Axios的基本配置信息
 * @param configParams :其他配置信息，如后台正常返回状态码，token名称等
 */
export async function setupAxios(configParams?: ConfigParams) {
    const { OK_STATUS, NO_MESSAGE_ERROR, TOKEN_PREFIX_STR, IS_MOCK, TOKEN_KEY } = {
        OK_STATUS: 200,
        NO_MESSAGE_ERROR: ['canceled'],
        TOKEN_PREFIX_STR: '',
        IS_MOCK: false,
        ...configParams,
    };

    // 生成 Axios 实例
    instance = axios.create({
        timeout: 30 * 1000,
    });

    // 实例响应拦截
    instance.interceptors.response.use(
        (response: AxiosResponse<AxiosResponseData>) => {
            const res = response.data;
            if (res.status !== OK_STATUS) {
                Message.error('请求错误');
                return Promise.reject(res.message || 'Error');
            }
            return res.data;
        },
        (error) => {
            Message.error('请求错误');
            if (!NO_MESSAGE_ERROR.includes(error.message)) {
                return Promise.reject(error.message);
            }
        },
    );

    return [instance];
}

/**
 * GET 请求
 * @param url
 * @param data
 * @returns
 */
export function useGet(url: string, data: any) {
    return instance.get(url, {
        params: data,
    });
}

/**
 * POST 请求
 * @param url
 * @param data
 * @returns
 */
export function usePost(url: string, data: any) {
    return axios.post(url, data);
}

/**
 * post下载
 * @param url
 * @param data
 * @param immediate
 * @returns
 */
// export async function usePostBlob<T = AxiosResponseData>(url: string, data: any, immediate = true) {
//   checkInstance();
//   return useAxios<T>(url, { method: 'POST', data, responseType: 'blob' }, instance, { immediate });
// }

// /**
//  * DELETE 请求
//  * @param url
//  * @param data
//  * @returns
//  */
// export function useDelete<T = AxiosResponseData>(
//   url: string,
//   data: any,
//   immediate = true
// ): StrictUseAxiosReturn<T> & PromiseLike<StrictUseAxiosReturn<T>> {
//   checkInstance();
//   return useAxios<T>(url, { method: 'DELETE', params: data }, instance, { immediate });
// }
