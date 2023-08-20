const kakashi = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");
kakashi.addEventListener("click", () => {
  kakashi.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "green";
});
btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});
// neu übung 
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove" , (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
})
window.addEventListener("mousedown" , () => {
  mousemove.style.transform = "scale(2) translate(-25% , -25%)"
})
window.addEventListener("mouseup" , () => {
  mousemove.style.transform = "scale(1) translate(-50% , -50%)"
  mousemove.style.border = " 2px red solid"
})
kakashi.addEventListener("mouseenter" , () => {
  kakashi.style.background = "rgba(0,0,0,0.6)"
})
kakashi.addEventListener("mouseout" , () => {
  kakashi.style.background = "black"
})
const nav = document.querySelector("nav");
window.addEventListener("scroll" , () => {
  if (window.scrollY > 120){
    nav.style.top = 0;
  }else{
    nav.style.top = "-50px";
  }
})