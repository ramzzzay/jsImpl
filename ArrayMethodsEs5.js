'use strict';

var ArrayMethods = {
    chain: function chain(array) {
        var me = this;
        function wrapChain(fn) {
            return function() {
                return this.me.chain(fn(array,arguments[0]));
            }
        }

        return {
            me: me,
            take: wrapChain(this.take),
            skip: wrapChain(this.skip),
            map: wrapChain(this.map),
            forEach: wrapChain(this.forEach),
            filter: wrapChain(this.filter),
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
        return arr.slice(0,n);
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
                if (callback(val, i, arr)) {
                    response.push(val);
                }
            }
        }
        return response;
    }
};

let am = ArrayMethods;
am.chain([1,2,3]).take(1);