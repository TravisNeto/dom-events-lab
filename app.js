// /*-------------------------------- Constants --------------------------------*/

// /*-------------------------------- Variables --------------------------------*/

// /*------------------------ Cached Element References ------------------------*/

// /*----------------------------- Event Listeners -----------------------------*/

// /*-------------------------------- Functions --------------------------------*/



// //constants ? complex data [] {} ?
// //variables
//     // tbd
//     // num1 = number(button text)
//     // num2 = number(button text)
//     // operator - "+", "-", "/", "*"
//     // result = "3.14"

let num1
let num2
let operator
let result = 0

// // dom elements -
//     // buttons
//     //    div.number
//     //    div.operator
//     //    div.equal
//     // result - .display

    const numberBtnEls = document.querySelectorAll('.number')
    const operatorBtnEls = document.querySelectorAll('.operator')
    const equalBtnEls = document.querySelector('.equal')
    const displayEl = document.querySelector('.display')
    


    // functions

    const render = () => {
        // render is updating the textContent of display
        displayEl.textContent = result
    
    }

    const updateResult = () => {

        result = num1
        render()
    }


// event handler -
   // click handler for each group of elements 
    //functionality will be tied to its button
    // 

    const updateNumbers = (event) => {
        console.log(event.target.textContent)
        if(!operator){
          if(!num1){
            num1 = event.target.textContent
        } else {
            num1 += event.target.textContent   
        }
            
        } else{
            if(!num1){
                num1 = event.target.textContent
            } else {
                num1 += event.target.textContent   
            }
    
            if (!num2){
                num2 = event.target.textContent
            }else {
                num2 += event.target.textContent
            }
        }

        updateResult()
        // console.log(`num1: ${num1}`, `num2: ${num2}`)
        }
       


    const updateEqual = (event) => {
        console.log(event.target.textContent)
        }

        // to take the current number (num1) -> update result
       
    

    render()


    const updateOperator = (event) => {
        console.log(event.target.textContent)
        operator = event.target.textContent
        event.target.style.border = 'solid white'
    }

numberBtnEls.forEach((numBtnEl) =>{
  numBtnEl.addEventListener('click', updateNumbers)
})

operatorBtnEls.forEach((opBtnEl) => {
  opBtnEl.addEventListener('click', updateOperator)
  
})

equalBtnEl.forEach((eqBtnEl) => {
  eqBtnEl.addEventListener('click', updateEqual)
})


operator = event.target.textContent

render()