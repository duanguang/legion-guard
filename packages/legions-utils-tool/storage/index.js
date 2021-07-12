/**
  * legions-utils-tool v0.0.10
  * (c) 2021 duanguang
  * @license MIT
  */
/**
 * 获取相应键值缓存信息
 *
 * @export
 * @param {string} key 键名
 * @param {string} defaultValue 默认值
 * @returns {string}
 */
function getStorageItem(key, defaultValue) {
    var localValue = JSON.parse(window.localStorage.getItem(key));
    return localValue ? localValue : defaultValue;
}
/**
 *设置相应键值缓存信息
 *
 * @export
 * @param {*} key 键名
 * @param {*} value 缓存数据
 */
function setStorageItems(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export { getStorageItem, setStorageItems };
