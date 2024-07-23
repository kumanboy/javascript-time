'use strict'

// function docket(x,y,z ){
//     console.log(x+y+z);
// }
//
// docket(1,2,3)

//bu yerda kodimiz togri ishlamoqda. lekin biz react node js vue js bilan ishlagan paytimizda serverda malumotlar keladi
//misol serverda kelayotgan malumot massive shaklda bolishi mumkin
// const number = [1,2,3,4,5]
// //
// function docket(x,y,z){
//     console.log(x+y+z);
// }
//
// docket(...number)
//
// //arrayning elementlar ozgaruvchida clonlash uchun ham spread operatori yordam beradi
//
// const arr = [1,2,3,4,5]
// const newArr = [...arr]
//
// console.log(newArr);

//Objectlarmizni ham spread operatori orqali clonlashimiz mn

// const islamic = {
//     name: "Muslim",
//     age: 30,
//     isMarried: true,
//     x:{
//         a: 1,
//         b: 2
//     }
// }

// const newIslamic = {...islamic}
// //
// newIslamic.name = "Yusuf"
// //
// console.log(newIslamic)
// console.log(islamic)

// OOP Object Oriented Programming Obyektga yonaltirilgan dasturlash
//
// //OOP tushunchasi Objectlarni Objectlarda yaratish,string number boolean kabi malumot turlarimiz bor
// // ularni ham objectlarda yaratiladi.Javascript fundamenti Obyektga yonaltirilgan dasturlash tili hisoblanadi.
// //Agar Javascript OOPsi yani fundamentini organib olsak react vue node react native kabi frameworklarni
// // o'rganish oson boladi.
// //Hayotiy Misol:
// //Mashinani fundamental qismlari yoki uni harakatlantirish deyarli hamma mashinada bir xil. javascipt OOP tushunchasida ham
// //deyarli birxil methodlar orqali yaratiladi.
// //Hayotiy Misol:
// //Hammani uyida TV bor lekin kimningdir Tvsida Youtubega ulansa boladi,kimnikidadir ham uzb ham chet el kanallari bor
// //kimnikidadir faqat uzb 12ta telekanali bor lekin hammasi tv faqat funksiyasi koproq boladi
// // //
// const firstName = "Muslim";
 // console.log(typeof firstName)
// // //
// // // //consoleda koradigan bolsak string malumot turimiz ham object malumot turidan tashkil topganini korishimiz mn
// // //
//const str = new String(firstName); // bu yol eski usul shu uchun warning korsatmoqda
// // //
// console.log( typeof str)
// console.log( typeof firstName)
// // //
// // // //malumot turini kelinglar tekshiraylik
// // //
// console.log(typeof str)
// console.log(typeof firstName)
//
// //korishimiz mn firstname deb yaratgan ozgaruvchimiz string str deb yaratilgan ozgaruvchimiz esa object malumot turida
// //yani string object malumot turidan kelib ciqqan.
//
// //brauzerda console orqali tekshiramiz. console.dir(String)
//
// //misol:ozimiz qolda object hamda uning prototip yasaymiz
// //
// const samsungTv = {
//     size: 42,
//     color: "black",
//     isSmartTv: true,
//     isConnectable: function (){
//         console.log("connectable");
//     }
// }
// // //
// const artelTv ={
//     isSmartTv: false
// }
// //
// //tepadagi samsungTv object ichidagi size color prototiplari  artelTv ichida ham bolsin
// //buning uchun proto ishlatamiz.
//
// //korishimiz mumkinki artelTvda color size isConnectable prototiplari yoq. yani bu yerda zanjir bolyapti. yani samsungTv
// //prototiplari artelTvda uchun ham ishlamoqda
//
// artelTv.__proto__ = samsungTv //sal eskirgan usul //old but gold


// //
// artelTv.isConnectable();
// //

//
// //endi yangi va kop ishlatadigan yollarni usullar organamiz eski usulni unutamiz
//
// //Object.setPrototypeOf va Object.getPrototypeOf degan methodlarimiz bor lkn hozir setPrototypeOf koramiz
//
// //Object.setPrototypeOf() methodi qavs ichida 1chi qaysi object ozgartirmoqchimiz shu yoziladi va qaysi objectdan protype
// // oladi.
// Object.setPrototypeOf(artelTv,samsungTv)
// //
// // console.log(samsungTv)
// // console.log(artelTv)
// //
// // //endi yana bitta yangi objectga samsungTv protypeni beraylik buning uchun Object.create() methodi ishlatiladi
// //
// const lg = Object.create(artelTv);
// // //
// console.log(lg)
//
//
//

//dynamic typing bu bir malumot turidan 2chi malumot turiga o'tish
// misol uchun string malumot turidan number malumot turiga otish

//123 number turidagi son bor shu qiymatni string ozgartirmoqchi bolsak qaysi yoldan foydalanamiz
//1) stringga otish

// console.log( String(4));

//qiymat string malumot turida

//2) avval ham korganmiz bu usulni

// console.log( typeof ('husan ' + 20))

//3) number malumot turiga otkazish

// console.log( typeof (Number('1')))

//4) number malumot turiga otkazish

// console.log(+'123');

//5) number malumot turiga otkazish parseInt() methodi orqali

//console.log(typeof parseFloat('12.3 px'));

//booleanga otish

//Muhim.Esda saqlang.
// Null, 0, "", undefined, NaN bizga doyim false qaytaradi

//Ozgaruvchi yaratyapmiz qiymati 0 ga teng. If orqali tekshiryapmiz agar shartimiz falsega teng bolsa console ishlamasligi

//kerak. 0 false qiymatga ega bolgani uchun bizda consoleda yozuv chiqmaydi

// let number;
//
// if (number){
//     console.log("husan");
// }

//2) boolean malumot turiga otkazish

// let a = -8/0
//

//3) boolean malumot turiga otkazish

// console.log( !!'');







// function sayHello() {
//     console.log('Hello');
// }
//
// sayHello();

// function sayHello(text) {
//
//     console.log(text);
// }                           // Parametrga misol
//
// sayHello('Husan');

// function calculator(a , b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a**b)
// }
//
// calculator(2,5);
// const age = 20
//
// function sayMyName(name,subName) {
//     const age = 17
//     console.log(`My name is ${name} ${subName}, my age is ${age}`)
// }
//
// console.log(age)
//
// sayMyName('Ozod','Nazarov');

// Local and Global O'zgaruvchilar

// let age = 30
//
// function sayMyName(name,subName) {
//
//     console.log(`My name is ${name} ${subName}`);
//     console.log(age);
// }
// sayMyName('Husan','Davronov');
//
// console.log(age);

//return

// function calculator(a , b){
//     return a+b;
// }
// //
// console.log(calculator(10,5));

// function calculator(a , b){
//     return a+b;
// }
// //
// const sumOfAandB = calculator(10,5);  //Global ozgaruvchi
// //
// console.log(sumOfAandB);

// Function Declaration varga oxshash

//
// const sumOfAandB = calculator(10,5);
//
// console.log(sumOfAandB);
//
// function calculator(a , b){
//     return a+b;
// }

//Function Expression

// const sayHello = function(){
//     console.log('Hello Sotaqozi');
// }
//
// console.log(sayHello);

//Arrow Function
//
// const calculator = (a,b) => a+b//=> belgisidan song  return kalit sozi bor
//
// calculator(10,5)

//












//OLD Way                   old but gold

//html filelarimizga ozgartirishlar kiritmoqchi bolsak albatta uni
// ozgaruvchiga olishimiz kerak boladi
// box classimizni bitta ozgaruvchiga saqlab olamiz
//DOM elementlari orqali murojat qilish uchun html filemizdagi taglarimizga
//document kalit sozi yoziladi keyin biz class olmoqchimizmi yoki tag yoki id shu narsani ham korsatish uchun
//id boyicha olmoqchi bolsak getElementById() metodi qollaniladi, agar class boyicha getElementByClassName() metodi orqali olamiz


// const btn = document.getElementsByTagName('button');
// console.log(btn)


//html filemizda buttonlarimiz bor ularni olish uchun ham ozgaruvchi yaratib olamiz hamda taglarimizga murojat qilish uchun
//getElementsByTagName() metodi orqali olamiz.getElementsByTagName() metodi har doyim massive qaytaradi

// const buttons = document.getElementsByTagName('button');

//consoleda koradigan bolsak bizda  massive qaytarmoqda. agar biz buttonlarimiz ichidagi aynan bittasiga ozgartirish kiritmoqchi
//bolsak document.getElementsByTagName('button')[1] uning indexini korsatib qoyishimiz kerak boladi
// const button = document.getElementsByTagName('button')
// console.log(button);

// const circle = document.getElementsByClassName('circle');
//
// console.log(circle);

//consoleda koradigan bolsak bizda  massive qaytarmoqda. agar biz circle ichidagi aynan bittasiga ozgartirish kiritmoqchi
//bolsak document.getElementsByClassName('circle')[1] uning indexini korsatib qoyishimiz kerak boladi
//Consoleda HTML Collection korsatadi

// console.log(circle);

//New Way

//querySelector() va querySelectorAll() metodlari orqali taglra murojat qilishimiz mn
//bir narsani yodda saqlang agar biz classga murojaat qilmoqchi bolsak uning nomi oldidan . (nuqta) .heart qoyishimiz kerak
// agar idga murojaat qilmoqchi bolsak uning nomi oldidan # (panjara) qoyishimiz kerak #heart qoyishimiz kerak,
// agar tagga murojaat qilmoqchi bolsak hech qanaqa belgi qoyilmaydi
//querySelector() faqat 1chi elementni qaytaradi
//querySelectorAll() hammasini
//
// const btn = document.querySelectorAll('button')
// console.log(btn)


// const box = document.querySelector('#box')
// console.log(box);
//
// //queryselectorAll() NodeList qaytaradi. HTML Collectiondan farqi prototipida.Va aynan shu narsa uning avfzal tomoni hisoblanadi
// //NodeList prototipini koradigan bolsak unda forEach() metodi qollasak boladi bu orqali bemalol loop hosil qilsak boladi
//
// const hearts = document.querySelectorAll('.heart')
// console.log(hearts);

//Loop
// const hearts = document.querySelectorAll('.heart')
//
// hearts.forEach((item)=>{
//     console.log(item)
// })
// const btns = document.querySelector('.btns')
// // console.log(btns)
//
// const allbuttons = btns.querySelectorAll('.heart')
// console.log(allbuttons)
//
// allbuttons.style.backgroundColor = 'red'

// const btn = document.querySelector('.heart')
//     btn2 = document.querySelector('.heart2'),
//     btn3 = document.querySelector('.heart3');
// btn.style.color = 'white'
// btn.style.backgroundColor = 'blue'
// btn.addEventListener('mouseleave',()=>{
//     btn2.style.backgroundColor = 'yellow'
//     btn2.addEventListener('mouseleave', ()=>{
//         btn3.style.backgroundColor = 'green'
//     })
// })
// btn3.textContent = 'halo'
//quyidagi kodda HTML document boyicha wrapperni izlamayapti aynan wrapperni ozini ichidan heart classlarimizni olyapti
//bu usulni ham bilib qoygan yaxshi
//
// const wrapper = document.querySelector('.wrapper');
// //
// const heart= wrapper.querySelectorAll('.heart');
// //
// console.log(heart);
// const button =document.querySelector('.btn')
// button.style.backgroundColor='pink';
// button.addEventListener('mouseenter',()=> {
//     alert('hover');
// })
// button.textContent='M';
//
// const link = document.querySelector('a');
// link.addEventListener('click',(event)=> {
//     event.preventDefault()
//     let a  = 1
//     a++
//     btn.textContent = `${a}`
// })








