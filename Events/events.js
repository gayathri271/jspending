let imgelm=document.getElementById("on");
function image(){
    imgelm.src="https://i.pinimg.com/736x/4c/0d/45/4c0d452e01b9e9960962ee20cbf1838f.jpg"
}
let shivimg=document.getElementById("shiv");
shivimg.onclick=function(){
    shivimg.src="https://i.pinimg.com/originals/53/df/8d/53df8d6ef33c6ecca65375a365617274.jpg"
    shivimg.innerHTML="<p>event binding</p>"
}
let lv=document.getElementById("bt");
function leave(){
    lv.style.backgroundColor="yellow"
}
let d=document.getElementById("in");
 d.onkeydown=function(){
    d.style.backgroundColor="red"
 }
 
 let c=document.getElementById("press");
 c.onkeypress=function(){
    c.style.backgroundColor="green"
 }
 let e=document.getElementById("up");
 e.onkeyup=function(){
    e.style.backgroundColor="green"
 }
//  query selectorall
let r=document.querySelectorAll("p")
for(i=0;i<r.length;i++){
    r[i].style.backgroundColor="red"
}
// find the given number is odd or even without % operator 

a=+prompt("enter a number")
b=a/2                       //off of the a value
console.log(b)
c=Math.floor(b)             //if b contains float value then floor return as int
console.log(c)
console.log(c+c)
if(a==(c+c)){              
    console.log("even")
}
else{
    console.log("odd")
}