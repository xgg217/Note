(() => {
  function tiao(n) {
    if(n <= 0) {
      return -1;
    }
    if(n === 1) {
      return 1
    }

    if(n === 2) {
      return 2
    }

    return tiao(n - 1) + tiao(n - 2);
  }

  console.time('testForEach');
  // console.log(tiao(40));
  console.timeEnd('testForEach');  // testForEach: 0.250732421875ms
  
})();

(() => {
  function tiao(n) {
    if(n <= 0) {
      return -1;
    }

    if(n === 1) {
      return 1;
    }

    if(n === 2) {
      return 2;
    }

    let a = 1;
    let b = 2;
    let c = 0;

    for(let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c
  }

  console.time('testForEach');
  console.log(tiao(10));
  console.timeEnd('testForEach');  // testForEach: 0.250732421875ms
  
})();

(() => {
  function tiao(n) {
    if(n <= 0) {
      return -1;
    }
    if(n === 1) {
      return 1
    }

    if(n === 2) {
      return 2
    }

    return tiao(n - 1) + tiao(n - 2);
  }

  console.time('testForEach');
  console.log(tiao(10));
  console.timeEnd('testForEach');  // testForEach: 0.250732421875ms
})();