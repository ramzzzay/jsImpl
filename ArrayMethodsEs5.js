'use strict';

var ArrayMethods = {
    chain: function chain(array) {
        var ams = this;
        function wrapChain() {
            // return this.take(array,1);
            console.log(arguments[0]);
            // return arguments[0](this.take(arguments[1],arguments[2]));
        }
        var s = () => this;

        return {
            take: n=> wrapChain.call(ams,s,array,n),
            // skip: wrapChain(skip),
            // map: wrapChain(map),
            // forEach: wrapChain(forEach),
            // filter: wrapChain(filter),
            value: function value() {
                return array;
            }
        };
    },

    forEach: function (arr, callback) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            callback(arr[i]);
        }
    },

    map: function (arr, callback) {
        var response = [], length = arr.length;
        for (var i = 0; i < length; i++) {
            response.push(callback(arr[i]));
        }
        return response;
    },

    skip: function skip(arr, n) {
        return arr.slice(n);
    },

    take: function take(arr, n) {
        arr.length = n;
        return arr;
    },

    reduce: function (arr, callback) {
        var k = 0, length = arr.length;
        while (k < length && !(k in arr)) {
            k++;
        }
        if (k >= length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        var value = arr[k++];
        for (; k < length; k++) {
            if (k in arr) {
                value = callback(value, arr[k], k, arr);
            }
        }
        return value;
    },

    filter: function (arr, callback) {
        var response = [], length = arr.length;
        for (var i = 0; i < length; i++) {
            if (i in arr) {
                var val = arr[i];
                if (callback.call(callback, val, i, arr)) {
                    response.push(val);
                }
            }
        }
        return response;
    }
};

let am = ArrayMethods;