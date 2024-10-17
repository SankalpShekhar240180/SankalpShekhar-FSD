function rollnumber(num, delay, next) {
    setTimeout(() => {
      console.log("Roll number is ", num);
      if (next) next();
    }, delay);
  }
  
  rollnumber(101, 2000, () => {
    rollnumber(102, 2000, () => {
      rollnumber(103, 2000, () => {
        rollnumber(104, 2000);
      });
    });
  });

  