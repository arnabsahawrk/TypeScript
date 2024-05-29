//enum - store constants; duplicate value is not allowed here.

//enum types: numeric, string, heterogeneous

//numeric enum
enum RequestType {
  readData = 1,
  saveData = 4,
  deleteData,
}

console.log(RequestType);
console.log(RequestType.deleteData);
console.log(RequestType["readData"]);
console.log(RequestType[5]);

//string enum
enum RequestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}

console.log(RequestType2);
console.log(RequestType2["deleteData"]);

//heterogeneous enum
enum RequestType3 {
  id = 101,
  name = "Arnab",
}

console.log(RequestType3);
