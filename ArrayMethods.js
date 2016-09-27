'use strict';

/*export default*/
class ArrayMethods {

    constructor(array) {
        this.array = array;
    }

    toString() {
        return this.array.toString();
    }

    static chain(array) {
        this.array = array;
        return new ArrayMethods(array);
    }

    value() {
        return this.array;
    }

    forEach(callback) {
        for (var i = 0; i <= this.array.length - 1; i++) {
            callback(this.array[i]);
        }
    }

    static forEach(arr,callback) {
        new ArrayMethods(arr).forEach(callback);
    }

    map(callback) {
        var response = [];
        for (var i = 0; i <= this.array.length - 1; i++) {
            response.push(callback(this.array[i]));
        }
        return new ArrayMethods(response);
    }

    static map(arr,callback){
        return new ArrayMethods(arr).map(callback)
    }

    skip(n) {
        var response = [];
        for (var i = n; i <= this.array.length - 1; i++) {
            response.push(this.array[i])
        }
        return new ArrayMethods(response);
    }

    static skip(arr,n) {
        return new ArrayMethods(arr).skip(n);
    }

    take(n) {
        var response = [];
        for (var i = 0; i <= n - 1; i++) {
            response.push(this.array[i])
        }
        return new ArrayMethods(response);
    }

    static take(arr,n) {
        return new ArrayMethods(arr).take(n);
    }

    reduce(callback) {
        var k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < this.array.length && !(k in this.array)) {
                k++;
            }
            if (k >= this.array.length) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = this.array[k++];
        }
        for (; k < this.array.length; k++) {
            if (k in this.array) {
                value = callback(value, this.array[k], k, this.array);
            }
        }
        return value;
    };

    static reduce(arr,callback) {
        return new ArrayMethods(arr).reduce(callback);
    }

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
}
