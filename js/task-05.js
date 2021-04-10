const inputRef = document.querySelector('#name-input')
const nameRef = document.querySelector('#name-output')

const onInputChange = (event) => {
    if (inputRef !== ''){
     nameRef.textContent = event.currentTarget.value  
    } else nameRef.textContent = currentTarget.value
}

inputRef.addEventListener('input', onInputChange)
