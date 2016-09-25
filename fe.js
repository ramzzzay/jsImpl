/**
 * Created by tastytaste on 25.09.2016.
 */


function myForEach(arr, callback) {
    for(var i=0;i<=arr.length-1;i++)callback(arr[i]);
}

function myMap(arr, callback) {
    var response = new Array();
    for(var i=0;i<=arr.length-1;i++) response.push(callback(arr[i]));
    return response;
}

function skip(arr, n) {
    var response = new Array();
    for(var i=n;i<=arr.length-1;i++){
        response.push(arr[i])
    }
    return response;
}

function take(arr, n) {
    return arr[n-1];
}