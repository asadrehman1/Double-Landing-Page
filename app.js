const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseenter",()=>{
    left.classList.add("left-class");
    right.classList.add("right-class");
})
left.addEventListener("mouseleave",()=>{
    left.classList.remove("left-class");
    right.classList.remove("right-class");
})

right.addEventListener("mouseenter",()=>{
    left.classList.add("left-class-2");
    right.classList.add("right-class-2");
})
right.addEventListener("mouseleave",()=>{
    left.classList.remove("left-class-2");
    right.classList.remove("right-class-2");
})
