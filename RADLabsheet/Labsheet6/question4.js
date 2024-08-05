function createCounter() {
    let count = 0;
  
    return function() {
      count += 1;
      console.log('Current count:', count);
    };
  }
  
  const counter = createCounter();
  counter();
  counter();
  counter();


  
  