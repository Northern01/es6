export function async() {
    
    function timeout(ms) {
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            console.log("Hello I am here!!");
            reject("I reject it");
          }, ms);
        });
      }
      
      async function asyncPrint(value, ms) {
        console.log("start");
        try{
        await timeout(ms);}
        catch(err){
          console.log(err);
        }
        console.log("end - " + value);
      }
      
      asyncPrint('Test', 50);

}