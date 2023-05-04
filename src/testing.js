const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('success');
    }, 1000)
  }
  else {
    reject("failed");
  }
});

myPromise
.then((value) => console.log(value))
.catch(rejectedValue => console.log(rejectedValue));