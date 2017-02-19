import { callBin, callOn, } from './callable';
import { catCall, } from './collectCall';

export const funcArray = fn => (d = 1) => Array(d).fill(fn);
export const pipeline = (...funcs) => x => funcs.reduce(callBin, x);
export const spreadPipe = (...funcs) => x => funcs.reduce(catCall, [ x, ]);
