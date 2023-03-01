let doc = document

let btn1 = doc.querySelectorAll('.color_buttons')[0]//Достаю классы
let btn2 = doc.querySelectorAll('.color_buttons')[1]
let span = doc.querySelector('.span')
let img = doc.querySelector('.product_img')
let price = doc.querySelectorAll('.price_buttons')
let priceOf = doc.querySelector('.priceOf')

let img1 = './img/mac_1.svg'//Достаю картины
let img2 = './img/mac_2.svg'


let change_img1 = () =>{//Функция при которой меняется картинка путем смены src и меняю классы обоим кнопкам
    img.src = img1
    btn1.className = 'color_buttons cl_bt-2'
    btn2.className = 'color_buttons cl_bt-1'
    span.textContent = 'Space Grey'
}
let change_img2 = () =>{
    img.src = img2
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