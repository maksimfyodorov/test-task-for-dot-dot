import TextField from './TextField'

const textFields = document.querySelectorAll('.js-text-field')

textFields.forEach(textField => {
  new TextField(textField)
})
