export function promise() {

  
  //Node Env don't load image.
  const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
    /*  const image = new Image();
      image.onload  = resolve;
      image.onerror = rejecct;
      image.src = path;
      */
     resolve();
    });
  };

  preloadImage("http://www.baidu.com/img/bd_logo1.png?where=super")
  .then(() => {
    console.log("Baidu Image Loaded!");
  })
  .catch((err) => {
    console.log("Baidu Image Load error. error: " + err.message);
  });
  
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'time done');
    });
  }
      
  timeout(100).then((value) => {
    console.log(value);
  });
      
}