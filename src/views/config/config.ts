import { json } from './tools/json';
import { dateTime } from './tools/dateTime';
import { text } from './tools/text';
import { image } from './tools/image';
import { color } from './tools/color';
import { code } from './tools/code';
import { extension } from './tools/extension';
import { network } from './tools/network';
import { programming } from './tools/programming';
import { html } from './tools/html';

const pageData: { [key: string]: jsonDataType[] } = {
    '/json': json,
    '/dataTime': dateTime,
    '/text': text,
    '/image': image,
    '/color': color,
    '/code': code,
    '/extension': extension,
    '/network': network,
    '/programming': programming,
    '/html': html,
};

export { pageData };
