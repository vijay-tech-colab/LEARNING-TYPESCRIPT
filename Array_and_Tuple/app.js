//! array in typescript ?
var arr = ["vijay ", 'kumar'];
var person = [20, "vijay", "kumar"];
console.log(arr);
// ! tuple in typescript ?
var tupleArr = [20, "kumar"];
var tuplePerson = [20, "vijay", "kumar"];
console.log(tupleArr);


var user;
(function (user) {
    user[user["ADMIN"] = 0] = "ADMIN";
    user[user["USER"] = 1] = "USER";
    user[user["EMPLOYEE"] = 2] = "EMPLOYEE";
})(user || (user = {}));
