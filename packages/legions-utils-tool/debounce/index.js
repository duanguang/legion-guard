/**
  * legions-utils-tool v0.0.10
  * (c) 2021 duanguang
  * @license MIT
  */
function debounce(func, delay) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        //@ts-ignore
        var context = this, args = arguments;
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

export { debounce };
