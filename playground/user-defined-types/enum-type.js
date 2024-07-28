//enum - store constants; duplicate value is not allowed here.
//enum types: numeric, string, heterogeneous
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 4] = "saveData";
    RequestType[RequestType["deleteData"] = 5] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.deleteData);
console.log(RequestType["readData"]);
console.log(RequestType[5]);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType2["deleteData"]);
//heterogeneous enum
var RequestType3;
(function (RequestType3) {
    RequestType3[RequestType3["id"] = 101] = "id";
    RequestType3["name"] = "Arnab";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
