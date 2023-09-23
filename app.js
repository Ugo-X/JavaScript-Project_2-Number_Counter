
let count = 0


const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')


btns.forEach(function(btn){
 // console.log(btn);
 btn.addEventListener('click', function(evt){
  const check = evt.currentTarget.classList
  // decrease if statements
  if(check.contains('decrease')){
   count --
  }
  if(count < 0){
   value.style.color = 'red'
  }
  // increase if statement
  else if(check.contains('increase')){
   count ++
  }
  if(count > 0){
   value.style.color = 'green'
  }
  // Reset if statements 
 if(check.contains('reset')){
  count = 0
 }
 if(count === 0){
  value.style.color ='black';
 }
  value.textContent = count
 })
})