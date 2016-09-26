export default class ArrayMethods {
static forEach(arr, callback) {
    for(var i=0;i<=arr.length-1;i++)callback(arr[i]);
}

static map(arr, callback) {
    var response = [];
    for(var i=0;i<=arr.length-1;i++) response.push(callback(arr[i]));
    return response;
}

static skip(arr, n) {
    var response = [];
    for(var i=n;i<=arr.length-1;i++){
        response.push(arr[i])
    }
    return response;
}

static take(arr, n) {
    return arr[n-1];
}
};