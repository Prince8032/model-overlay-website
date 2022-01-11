const book_demo= document.getElementById('book-demo')
const btn_close= document.getElementById('btn-close')
const btn_submit= document.getElementById('btn-submit')
const book_button=document.getElementById('book')
// call section
const call=document.getElementById('call')
const call_button=document.getElementById('call-us')
const btn_close1= document.getElementById('btn-close1')
const btn_submit1= document.getElementById('btn-submit1')

// reach us at section
const reach=document.getElementById('reach')
const reach_button=document.getElementById('reach-us')
const btn_close2= document.getElementById('btn-close2')
const btn_submit2= document.getElementById('btn-submit2')


// book section
console.log('i am in');
book_button.addEventListener('click', () =>{
    console.log('button is runing...');
    book_demo.classList.add('active')
})
btn_close.addEventListener('click', () =>{
    console.log(' close button is runing...');
    book_demo.classList.remove('active')
})
btn_submit.addEventListener('click', () =>{
    console.log('submit button is runing...');
    book_demo.classList.remove('active')
})

// call section
call_button.addEventListener('click', () =>{
    console.log('i am in call');
         call.classList.add('active')
})
btn_close1.addEventListener('click', ()=>{
    console.log('i aM IN close button');
    call.classList.remove('active')
})
btn_submit1.addEventListener('click', ()=>{
    console.log('to submit i am in..');
    call.classList.remove('active')
})

// reach us at section
reach_button.addEventListener('click', () =>{
    console.log('i am in call');
         reach.classList.add('active')
})
btn_close2.addEventListener('click', ()=>{
    console.log('i aM IN close button');
    reach.classList.remove('active')
})
btn_submit2.addEventListener('click', ()=>{
    console.log('to submit i am in..');
    reach.classList.remove('active')
})


