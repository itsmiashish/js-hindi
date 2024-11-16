const h2 = document.getElementById("h2")
const dev = document.getElementsByClassName("division")[0]
const deo = document.getElementsByTagName("div")[0]
const btn =document.querySelector(".btn")
h2.innerText="Hii, my name is ashish. i am Fullstack devloper "
h2.style.color="orange"
dev.style.backgroundcolor="blue";
dev.innerText=`"1. Mehnat ka fal meetha hota hai"
Meaning: Hard work ka result hamesha acha hota hai
" 2.Der aaye durust aaye"
Meaning: Late hona bura nahi hai, par sahi hona important hai
" 3.Jaise ko taisa"
Meaning: Jaisa koi behave kare, waisa hi uske sath karo
"4.Umeed pe duniya kayam hai"
Meaning: Hope hi life ki sabse important cheez hai
"5.Apna haath jagannath"
Meaning: Self-dependent hona best hai
"6.Jaan hai to jahan hai"
Meaning: Health is wealth
"7.Lakshmi chanchala hai"
Meaning: Money permanent nahi hoti, aati jaati rehti hai
"8.Ant bhala to sab bhala"
Meaning: Ending achi ho to journey ki difficulties matter nahi karti`

btn.addEventListener("click",function(e){
if(	e.target.style.backgroundColor === "wheat")
{
	e.target.style.backgroundColor = "#212121";
	e.target.style.color="wheat"
}
else
{
	e.target.style.backgroundColor="wheat"
	e.target.style.color="#212121"
}
})