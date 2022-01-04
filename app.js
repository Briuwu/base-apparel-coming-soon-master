const btn = document.querySelector('#btn')

const emailWarning = document.querySelector('#email')
const warning = document.querySelector('.details__submit--warning')
const iconWarning = document.querySelector('#iconWarning')

const show = () => {
  iconWarning.classList.add('visible')
  warning.classList.add('visible')
  emailWarning.classList.add('visible')
}

const hide = () => {
  iconWarning.classList.remove('visible')
  warning.classList.remove('visible')
  emailWarning.classList.remove('visible')
}

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

btn.addEventListener('click', (e) => {
  let value = emailWarning.value
  e.preventDefault()
  if(re.test(value)){
    hide()
  } else {
    show()
  }
})