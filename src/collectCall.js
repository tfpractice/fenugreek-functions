import { callBin, callOn, } from './callable';

const isIterable = o => !!o[Symbol.iterator];
const iterify = o => isIterable(o) ? o : [ o, ];
const spread = c => [ ...iterify(c), ];
const last = coll => spread(coll).pop();
const first = coll => spread(coll).shift();

export const firstCall = arr => fn => callOn(first(arr))(fn) || arr;
export const lastCall = arr => fn => callOn(last(arr))(fn) || arr;
export const catCall = (arr, fn) => spread(arr).concat(lastCall(arr)(fn));
