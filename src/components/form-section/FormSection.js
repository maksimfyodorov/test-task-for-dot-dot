class FormSection {
  constructor(element) {
    this.formSection = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._switchHiddenSectionState()
    this._addEvents()
  }

  _getDomElements() {
    this.input = this.formSection.querySelector('.checkbox__input[type="checkbox"]')
  }

  _switchHiddenSectionState() {
    this.hiddenSection = Array.from(this.formSection.querySelectorAll('.form-section__text-field')).filter(el => el.matches('._is-one-of-hidden-section'))
    this.hiddenSection.forEach(el => {
      this.input.checked
        ? el.style.display = 'block'
        : el.style.display = 'none'
    })
  }

  _addEvents() {
    this.input.addEventListener('change', this._handleInputOnchange.bind(this))
  }

  _handleInputOnchange() {
    this._switchHiddenSectionState()
  }
}

export default FormSection
