const promise=new Promise((resolve, reject) => {
    console.log("first");
    resolve("Promise Resolved");
    reject("Promise Rejected");
  });
  promise.then(() => {
    console.log("This is my Promise");
  }).catch(()=>{
    console.log("This is my Error page")
  })
  let rollno = (num, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Roll number is", num);
        resolve("Successfully done!");
      }, delay);
    });
  };
  
  rollno(1, 2000).then(() => {
    rollno(2, 2000).then(() => {
      rollno(3, 2000).then(() => {
        rollno(4, 2000);
      });
    });
  });