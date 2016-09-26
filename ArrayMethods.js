'use strict';

export default class ArrayMethods {

    constructor(array){
        this.array = array;
    }

    toString() {
        return this.array.toString();
    }

    static chain(array){
        this.array = array;
        return new ArrayMethods(array)
    }

    value(){
        return this.array;
    }

    forEach(callback) {
        for (var i = 0; i <= this.array.length - 1; i++) {
            callback(this.array[i]);
        }
    }

    map(callback) {
        var response = [];
        for (var i = 0; i <= this.array.length - 1; i++) {
            response.push(callback(this.array[i]));
        }
        return new ArrayMethods(response);
    }

    skip(n) {
        var response = [];
        for (var i = n; i <= this.array.length - 1; i++) {
            response.push(this.array[i])
        }
        return new ArrayMethods(response);
    }

    take(n) {
        var response = [];
        for(var i = 0; i<= n-1;i++){
            response.push(this.array[i])
        }
        return new ArrayMethods(response);
    }

    reduce(callback) {
        if (this === null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this.array), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return new ArrayMethods(value);
    };

    filter(fun) {
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(this.array);
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
};