let doc = document

let btn1 = doc.querySelectorAll('.color_buttons')[0]//Достаю классы
let btn2 = doc.querySelectorAll('.color_buttons')[1]
let span = doc.querySelector('.span')
let img = doc.querySelector('.product_img')
let price = doc.querySelectorAll('.price_buttons')
let priceOf = doc.querySelector('.priceOf')
let colSlid = doc.querySelectorAll('.swiper-slide')
let swipeWrap = doc.querySelector('.swiper-wrapper')
let img1 = './img/mac_1.svg'//Достаю картины
let img2 = './img/mac_2.svg'


let change_img1 = () =>{//Функция при которой меняется картинка путем смены src и меняю классы обоим кнопкам
    swiper.slideNext(300, true)
    btn1.className = 'color_buttons cl_bt-2'
    btn2.className = 'color_buttons cl_bt-1'
    span.textContent = 'Space Grey'
    
}
let change_img2 = () =>{
    swiper.slidePrev(300, true)
    btn2.className = 'color_buttons cl_bt-2'
    btn1.className = 'color_buttons cl_bt-1'
    span.textContent = 'White'
}
for(let e of price){
    
    let chenge_price = () =>{
        
        for(let i of price){//Принажатии возвращаю дефотлдный стиль
            i.style = '2px solid #CFE7FF'

        }   


        if (e == price[0]) {//Ищю кокая кнопка была нажата и выполняю ее условие точнее меняю цену
            priceOf.textContent = '$1,999'
        }else if (e == price[1]) {
            priceOf.textContent = '$2,199'
        }else if (e == price[2]) {
            priceOf.textContent = '$2,599'
        }else if (e == price[3]) {
            priceOf.textContent = '$3,199'
        }
  
        e.style = 'border: 2px solid #0071E3'//меняю стиль нажатой кнопке
    }
    e.addEventListener('click', chenge_price)//Функция клика для изменения цены



}


btn2.addEventListener('click', change_img1)//Фукция для измены картины и кнопки
btn1.addEventListener('click', change_img2)

let modal_window = doc.querySelector('.modal_not-activ')
let modal_x = doc.querySelector('.modal_x')
let container = doc.querySelector('.container')
let burger = doc.querySelector('.burger')
let burger_line = doc.querySelectorAll('.burggerLine')
let burger_section = doc.querySelector('.burger_section')

let modal = () =>{
    modal_window.classList.toggle('modal')//добавляю класс при клике
    if (modal_window.classList.contains('modal')) {//Модалка активна скрол бади исчезает
        doc.body.style.overflow = 'hidden'
    }else if(modal_window.classList.contains('modal_not-activ')){//Когда модалка не активна возвращаю скрол
        doc.body.style.overflow = 'auto'
    }
}
doc.body.addEventListener('keyup', (event)=>{
    if (event.keyCode == 27) {
        modal_window.className = 'modal_not-activ'
    }
})

let burgerActiv = () =>{
    for(let line of burger_line){
        line.classList.toggle('burggerLineActiv')//Меняю класс на бургере что бы изменить стиль
    }
    burger_section.classList.toggle('burger_sectionActiv')
    if (burger_section.classList.contains('burger_sectionActiv')) {
        doc.body.style.overflow = 'hidden'
    }else if(burger_section.classList.contains('burger_section')){
        doc.body.style.overflow = 'auto'
    }
}


//Работа со свайперомв
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
swiper.on('slideChange', function () {//При измене слайда изменяю цвета кнопок и картиншкт
    console.log('slide changed');
    if (btn1.className == 'color_buttons cl_bt-1') {
        btn1.className = 'color_buttons cl_bt-2'
        btn2.className = 'color_buttons cl_bt-1'
        span.textContent = 'Space Grey'
    }else if (btn2.className == 'color_buttons cl_bt-1') {
        btn2.className = 'color_buttons cl_bt-2'
        btn1.className = 'color_buttons cl_bt-1'
        span.textContent = 'White'
    }
  });

  let icon = doc.querySelectorAll('.material-icons')
  let addvertise = doc.querySelector('.add_wraper')
  let conection = doc.querySelector('.conection')
  let chenge_icon = () =>{//Анимация кнопки вызов и сообщение
    icon[1].style = 'display:block;'
    icon[2].style = 'display:none;'
    setInterval(() => {
        if (icon[1].style.display == 'block') {
            icon[2].style = 'display:block;'
            icon[1].style = 'display:none;'
        }else if (icon[2].style.display == 'block') {
            icon[1].style = 'display:block;'
            icon[2].style = 'display:none;'
        }
    }, 2500);
  }
chenge_icon()

let num = doc.querySelector('.num')
let numP = doc.querySelector('.num-p')
let i = 0; // глобальная переменная


doc.addEventListener('scroll',()=>{//При скроле выдвигаю рекламу и через 30 сек удаляю автаматом
    if (window.scrollY > 230) {
        addvertise.style.transform = 'translateX(0%)'
        
        setTimeout(deliteadd, 30000)

    };

    
})
 


let deliteadd = () =>{//Функция для удаления рекламы
    addvertise.style.transform = 'translateX(150%)'
    setTimeout(() => {
        addvertise.style.display = 'none'
    }, 500);
}

let timer = setInterval(function() {//Функция для таймера
    i++;
    
    if (i >= 0 && i < 16) {
       
        numP.textContent = i
    }else if (i > 15) {
        clearInterval(timer);
        numP.style.display = 'none'
        icon[0].style.display = 'block'
        num.addEventListener('click', deliteadd)
    }
    console.log(i);

}, 1000);









burger.addEventListener('click', burgerActiv)

priceOf.addEventListener('click', modal)

modal_x.addEventListener('click', modal)



