'use strict';

/*export default*/
class ArrayMethods {

    chain(array) {
        var main = this;
        var self = result => this.chain(result);
        return  {
            take: n => {
                var result = this.take(array,n);
                return self(result);
            },
            value: () => this.value(array)};
    }

    value(arr) {
        return arr;
    }

    forEach(arr, callback) {
        for (var i = 0; i <= arr.length - 1; i++) {
            callback(arr.array[i]);
        }
    }

    map(arr, callback) {
        var response = [];
        for (var i = 0; i <= arr.length - 1; i++) {
            response.push(callback(arr[i]));
        }
        return new ArrayMethods(response);
    }

    skip(arr, n) {
        var response = [];
        for (var i = n; i <= arr.length - 1; i++) {
            response.push(arr[i])
        }
        return new ArrayMethods(response);
    }

    take(arr, n) {
        var response = [];
        for (var i = 0; i <= n - 1; i++) {
            response.push(arr[i])
        }
        return response;
    }

    reduce(arr, callback) {
        var k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < this.array.length && !(k in arr.array)) {
                k++;
            }
            if (k >= arr.length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = arr[k++];
        }
        for (; k < this.array.length; k++) {
            if (k in this.array) {
                value = callback(value, arr[k], k, arr);
            }
        }
        return value;
    };

    filter(arr, fun) {
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(arr);
        var len = t.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisArg, val, i, t)) {
                    res.push(val);
                }
            }
        }
        return new ArrayMethods(res);
    };
}
