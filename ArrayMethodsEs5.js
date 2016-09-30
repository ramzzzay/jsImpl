'use strict';

var ArrayMethods = {
    chain: function chain(array) {
        function wrapChain() {
            return this.chain(arguments[0](arguments[1],arguments[2]));
        }

        return {
            take: n => wrapChain.call(this,this.take,array,n),
            skip: n => wrapChain.call(this,this.skip,array,n),
            map: callback => wrapChain.call(this,this.map,array,callback),
            forEach: callback => wrapChain.call(this,this.forEach,array,callback),
            filter: callback => wrapChain.call(this,this.filter,array,callback),
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