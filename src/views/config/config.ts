import { json } from './json';
import { dateTime } from './dateTime';
export interface jsonDataType {
    name: string;
    path: string;
}

const pageData: { [key: string]: jsonDataType[] } = { '/json': json, '/dataTime': dateTime };

export { pageData };
