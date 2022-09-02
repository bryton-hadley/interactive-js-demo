console.log('My Javscript is working!!!')


// step 1: grab an HTML element
//example of grabing an element 
const plusBtn = document.querySelector('#plus-btn')
// writing one for the minus button now
const minusBtn = document.querySelector('#minus-btn')
// writing one for the reset button 
const resetBtn = document.querySelector('#reset-btn')
// for numbers to pop up on the website counter 
const counter = document.querySelector('#counter')
// to set up the theme
const themeBtn = document.querySelectorAll('.theme-buttons')
// console.log(themeBtn)

// Step 2: Write the function
let count = 0

const increase = () => {
    // add ++ to your varible to make it add itself
    count++
    console.log(count)
// to access the counter element 
counter.textContent = count
console.log(count)

}
//for the minus button
const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
    console.log(count)
}

const reset = (event) => {
    console.log(event.target.id)
    count = 0
    console.log(count)
    counter.textContent = count
    console.log(count)
}

//  function for the theme's
const selectTheme = (event) => {
    // console.log(event.target.textContent)
    const theme = event.target.textContent
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

}

// Step 3: Combines step 1 and 2 using an event listener 
//this is saying everytime i hit the olus button it will increease
plusBtn.addEventListener('click', increase)
// for the minus button
minusBtn.addEventListener('click', decrease)
//for the reset button
resetBtn.addEventListener('click', reset)

//for the theme buttons

for(let i= 0; i < themeBtn.length; i++){
    themeBtn[i].addEventListener('click', selectTheme)
    // console.log(themeBtn[i].textContent)
}