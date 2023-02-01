function buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy a car')
        },5000)
    })
}
function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('lets go to manali')
        },2000)
    })
}
function reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached manali')
        },1000)
    })
}
function gotomountain(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('reached mountain')
        },500)
    })
}
async function fun1(){
    const msg1=await buycar();
    console.log(msg1)
    const msg2=await planatrip();
    console.log(msg2)
    const msg3=await reachmanali();
    console.log(msg3)
    const msg4=await gotomountain();
    console.log(msg4)
}
fun1()