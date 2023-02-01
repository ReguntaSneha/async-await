console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie=async()=>{'preMovie';
const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ticket'),3000);
});
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addButter=new Promise((resolve,reject)=>resolve(`butter`));
const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrinks`));


let ticket=await promiseWifeBringingTickets;
console.log(`wife:i have ${ticket}`);
console.log('husaband:we should go in');
console.log('wife:no iam hungry');

let popcorn=await getPopcorn;
console.log(`husband:i got some ${popcorn}`);
console.log('husband:we should go in');
console.log('wife:i need butter on my popcorn')

let butter=await addButter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log('husband:anything else darling?');
console.log('wife:lets go we are getting late');
console.log('husband:thank you for the remainder *grins*');


let coldDrinks=await getColdDrinks;
console.log(`wife:i want ${coldDrinks}`);
console.log(`husband:okay`);
return ticket;
}



preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');

