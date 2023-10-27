// Tuple

const tuple: [boolean, number] = [true, 1]
// tuple = [1, true, 5] // Error

// Enum

const _Roles = {
    JAVASCRIPT: 1,
    TYPESCRIPT: 2,
    ANGULAR: 3
}

console.log(_Roles.JAVASCRIPT)

enum Roles { JAVASCRIPT = 1, TYPESCRIPT, ANGULAR }

console.log(Roles.JAVASCRIPT)