/**
  * legions-utils-tool v0.0.10
  * (c) 2021 duanguang
  * @license MIT
  */
/* export function isObject(value: any) {
  return Object(value) === value;
} */
/* export const isObject = (obj: object) =>
  obj && typeof obj === 'object' && !Array.isArray(obj); */
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isString(value) {
    return typeof value === 'string';
}
function isPromise(obj) {
    return (!!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function');
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}
function isNullUndefined(val) {
    return val === null || val === void 0;
}

export { isArray, isBoolean, isNull, isNullUndefined, isObject, isPromise, isString, isUndefined };
