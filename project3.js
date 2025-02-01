let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let sec=document.getElementById("sec");


// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());


// for updation
// ---but it will not update time to time soo we have too use setinterval



// setinterval---for continue
// let currentTime=new Date();
// hrs.innerHTML=currentTime.getHours();
// mins.innerHTML=currentTime.getMinutes();
// sec.innerHTML=currentTime.getSeconds();


// setInterval(()=>{--function},1000)

setInterval(()=>{
    let currentTime=new Date();
    hrs.innerHTML=currentTime.getHours();
    mins.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds(); 
})

