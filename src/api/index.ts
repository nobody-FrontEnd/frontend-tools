import { useGet, usePost } from '../utils/axios';
import { urlEnum } from './url';

export async function getSortList(data: { name?: string; current: number; pageSize: number }) {
    return useGet(urlEnum.SORT_LIST, data);
}
