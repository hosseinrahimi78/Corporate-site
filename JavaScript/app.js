const navBtn = document.querySelector(".nav__btn")
const navMnu = document.querySelector(".nav-menu")
let navOpen = false;
navBtn.addEventListener("click",function(){
    if (navOpen){
        navBtn.classList.remove("nav__btn--open")
        navMnu.classList.remove("nav-menu--open")
        navOpen = false
    }else{
        navBtn.classList.add("nav__btn--open")
        navMnu.classList.add("nav-menu--open")
        navOpen = true;
    }
})


// const Like = document.querySelector(".place__like-icon")
// let LikeOr = false;
// Like.addEventListener("click",function(){
//     if(LikeOr){
//         Like.classList.remove("place__like-icon--Oreng")
//         LikeOr = false;
//     }
//     else{
//         Like.classList.add("place__like-icon--Oreng")
//         LikeOr = true;
//     }
// })

let buttons = document.querySelectorAll("#like");
buttons.forEach(x=>{
    
    x.addEventListener('click',()=>{
        if(x.classList.contains("place__like-icon--Oreng")){
            x.classList.remove('place__like-icon--Oreng')
        }else{
            x.classList.add('place__like-icon--Oreng')
        }

    })
})
