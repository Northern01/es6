exports.run = function() {
    let appCls = require("./dist/app").default;
    let appIns = new appCls();
}
