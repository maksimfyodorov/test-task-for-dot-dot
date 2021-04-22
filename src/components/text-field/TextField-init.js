import TextField from './TextField'

const allTextFields = Array.from(document.querySelectorAll('.text-field'))
const expandableTextFields = allTextFields.filter(el => el.matches('._has-arrow'))

expandableTextFields.forEach(textField => {
  new TextField(textField)
})
