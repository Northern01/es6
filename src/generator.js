export function generator() {

  function run(fn) {
    var gen = fn();
  
    function next(data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }
  
    next();
  }

  var Thunk = function (fileName) {
    return function (callback) {
      setTimeout(() => {
        console.log(fileName);
        callback();
      }, 300);
    };
  };
  
  var g = function* (){
    var f1 = yield Thunk('fileA');
    var f2 = yield Thunk('fileB');
    var fn = yield Thunk('fileC');
  };
  
  run(g);
}