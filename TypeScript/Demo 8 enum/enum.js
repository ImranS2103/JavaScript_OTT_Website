var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
console.warn(Role);
