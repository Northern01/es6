export function symbol() {
    
    let size = Symbol('size');

    class Collection {
      constructor() {
        this[size] = 0;
      }

      add(item) {
        this[this[size]] = item;
        this[size]++;
      }

      static sizeOf(instance) {
        return instance[size];
      }
    }

    let x = new Collection();
    console.log(Collection.sizeOf(x));

    x.add('foo');
    console.log(Collection.sizeOf(x));

    console.log(Object.keys(x));
    console.log(Object.getOwnPropertyNames(x));
    console.log(Object.getOwnPropertySymbols(x));


    const array = [5,5,6,6,7,7,7,5,3,2,2];
    const newArr = [...new Set(array)];

    for (let i of newArr) {
      console.log("setArray: " + i);
    }

    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    console.log(...union);

    // 交集
    let intersect = new Array([...a].filter(x => b.has(x)));
    console.log(...intersect);

    // 差集
    let difference = new Array([...a].filter(x => !b.has(x)));
    console.log(...difference);
}