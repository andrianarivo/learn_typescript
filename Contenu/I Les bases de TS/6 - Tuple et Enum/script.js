"use strict";
// Tuple
const tuple = [true, 1];
// tuple = [1, true, 5] // Error
// Enum
const _Roles = {
    JAVASCRIPT: 1,
    TYPESCRIPT: 2,
    ANGULAR: 3
};
console.log(_Roles.JAVASCRIPT);
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    Roles[Roles["TYPESCRIPT"] = 2] = "TYPESCRIPT";
    Roles[Roles["ANGULAR"] = 3] = "ANGULAR";
})(Roles || (Roles = {}));
console.log(Roles.JAVASCRIPT);
