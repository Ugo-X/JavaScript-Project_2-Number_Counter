 /* Ugo-X  */
let count = 0;

// we select the elements that we want to effect changes on or using
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// here we use the forEach method to loop/iterate over the buttons

btns.forEach(function (btn) {
 // you can log to see that the forEach function has selected each button
// console.log(btn);
btn.addEventListener('click', function(evt){
const check = evt.currentTarget.classList;
if(check.contains('decrease')){
 count--;
}
else if(check.contains('increase')){
count ++
}
else{
count = 0
}
// we have to make sure our span is equal to our already declared variable above.
value.textContent = count;

// further if conditions
if(count === 0){
 value.style.color = 'black'
}
if(count > 0 ){
value.style.color = 'green'
}
if(count < 0){
 value.style.color = 'red'
}
})
});
