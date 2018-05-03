"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrow = arrow;
function arrow() {

    function wrapper() {
        this.params = "Wrapper Params";
        this.delay = function () {
            var _this = this;

            for (var i = 0; i < 5; i++) {
                setTimeout(function () {
                    console.log("ArrowSetTimeout: " + i + " , " + _this.params);
                }, 500);

                setTimeout(function () {
                    console.log("======SetTimeout: " + i + " , " + this.params);
                }, 500);
            } //end for
        };
    }

    var wrapperIns = new wrapper();
    wrapperIns.delay();
}
//# sourceMappingURL=arrow.js.map
