const menuBar = document.querySelector("#menu_bar")
const navbar = document.querySelector('.navbar')

menuBar.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    searchBar.classList.remove('active')
})

const searchBtn = document.querySelector('#search_btn')
const searchBar = document.querySelector('.search-bar')

searchBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active')
    searchBtn.classList.toggle('fa-times')
    navbar.classList.remove('active')
})



const userBtn = document.querySelector('#user_btn')
const loginForm = document.querySelector('.login_form')
const formClose = document.querySelector('.form_close')

userBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active')
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    searchBtn.classList.remove('fa-times')
})

formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active')
})


const vidBtns = document.querySelectorAll('.vid_btn')
const video = document.querySelector('#video')
for (let i = 0; i < vidBtns.length; i++) {
    vidBtns[i].addEventListener('click', ()=>{
        for (let j = 0; j < vidBtns.length; j++) {
            vidBtns[j].classList.remove('active')            
        }
        vidBtns[i].classList.add('active')
        video.src = "img/vid-"+ i +".mp4"
    })
}


let swiper = new Swiper('.review-slider',{
    loop: true,
    spaceBetween: 50,//բոքսերի կողքի տարածությունը
    autoplay: {
        delay: 2500,
    },
    breakpoints: {//բոքսերի քանակը՝ նշված չափսի դեպքում
        650:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
})

let swiper1 = new Swiper('.brand-slider', {
    loop: true,
    autoplay:{
        delay: 2500,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        980:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
})












