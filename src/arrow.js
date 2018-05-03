export function arrow() {

    function wrapper() {
        this.params = "Wrapper Params";
        this.delay = function() {
          for (var i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log("ArrowSetTimeout: " + i + " , " + this.params);
              }, 500);

            setTimeout(function () {
                console.log("======SetTimeout: " + i + " , " + this.params);
            }, 500);
          } //end for
        }
    }

    let wrapperIns = new wrapper();
    wrapperIns.delay();
}