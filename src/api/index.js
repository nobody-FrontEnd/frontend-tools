import { useGet } from '../utils/axios';
import { urlEnum } from './url';
export async function getSortList(data) {
    return useGet(urlEnum.SORT_LIST, data);
}
//# sourceMappingURL=index.js.map