import autosize from 'autosize'
autosize(document.querySelectorAll('textarea'))

class TextField {
  constructor(element) {
    this.textField = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._addEvents()
  }

  _getDomElements() {
    this.input = this.textField.querySelector('.text-field__container')
  }

  _addEvents() {
    this.input.addEventListener('click', this._handleInputClick.bind(this))
    this.input.addEventListener('mouseleave', this._handleInputLeave.bind(this))
  }

  _handleInputClick(event) {
    event.preventDefault()
    const {target} = event
    this.textField.classList.toggle('_expanded')
    if (target.matches('.text-field__option')) {
      this.input.querySelector('.text-field__input').value =  target.innerText
      this.textField.classList.remove('_expanded')
    }
  }

  _handleInputLeave() {
    this.textField.classList.remove('_expanded')
  }
}

export default TextField
