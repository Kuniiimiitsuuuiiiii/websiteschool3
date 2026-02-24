function toggleMenu(){
document.getElementById("navMenu").classList.toggle("open");
}

// Announcement Slider
let slides=document.querySelectorAll(".slide");
let index=0;
if(slides.length>0){
setInterval(()=>{
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);
}

// Gallery Modal
function openModal(img){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=img.src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

// Dark Mode Toggle
function toggleDark(){
document.body.classList.toggle("dark");
}

// Back to Top
window.onscroll=function(){
let btn=document.getElementById("topBtn");
if(btn){
btn.style.display=window.scrollY>300?"block":"none";
}
};

function scrollTopPage(){
window.scrollTo({top:0,behavior:"smooth"});
}