export function closure() {

    var names = ["XiaoMing", "KangFu", "DaXiong", "JingXiang"];
    (function () {
        for (var i = 0 , len = names.length; i < len; i++) {
            (function (idx) {
                setTimeout(function(){
                    console.log(["Index: (", idx, ") Value: (", names[idx], ")"].join(''));
                }, 1000);
            }(i));
        }
    }());

}