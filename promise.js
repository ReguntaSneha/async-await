console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn=promiseWifeBringingTickets.then((t)=>{
    console.log('wife:i have tickets');
    console.log('husaband:we should go in');
    console.log('wife:no iam hungry');
    return new Promise((resolve,reject)=>resolve(`${t}popcorn`));
});
const getButter=getPopcorn.then((t)=>{
    console.log('husaband:i got some popcorn');
    console.log('husaband:we should go in');
    console.log('wife:i need some butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t}butter`));
});
const getColdDrinks=getButter.then((t)=>{
    console.log('wife:i need cold drink');
    console.log('husband:okay');
    return new Promise((resolve,reject)=>resolve(`${t}colddrink`))
    

});
getColdDrinks.then((t)=>console.log(t));
console.log('person4:shows ticket');
console.log('person5:shows ticket');
