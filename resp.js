burger =document.querySelector('.burger');
navbar = document.querySelector('.navbars');
navList = document.querySelector('.navList');
// background = document.querySelector('.background')
height = document.querySelector('.h-nav-resp')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('a');
    navList.classList.toggle('v-class-resp');
    // background.classList.toggle('background');
    // height.classList.toggle('h-nav-resp');

})


document.getElementById("login-btn").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})