const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1"); 
    }, 2000);    
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 2"); 
    }, 1000); 
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 3"); 
    }, 500); 
});

Promise.all([promise,promise2,promise3]).then((res) => {
    console.log(res)
})