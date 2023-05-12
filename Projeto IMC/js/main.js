import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = event =>{
  event.preventDefault()
  
  const weight = inputWeight.value 
  const height = inputHeight.value
   
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return;
  }

  AlertError.close()
  
  
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é de: ${result}` 
  
  Modal.message.innerText = message
  Modal.open() 
}

/*if (result < 18.5) {
  let messageBelow = `Abaixo do peso`
  modalMessage.innerText = messageBelow
} else if(result > 18.5 && result < 24.9) {
  let messageNormal = `Normal`
  modalMessage.innerText = messageNormal
} else if(result > 25.0 && result < 29.9) {
  let messageOverweight = `Sobrepeso`
  modalMessage.innerText = messageOverweight
} else if(result > 30 && result < 40) {
  let messageObesity = `Obesidade`
  modalMessage.innerText = messageObesity
} else if (result > 40) {
  let messageSevereObesity = `Obesidade Severa`
  modalMessage.innerText = messageSevereObesity
}
*/