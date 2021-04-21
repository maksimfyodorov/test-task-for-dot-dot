import Inputmask from 'inputmask'

class TextField {
  constructor(element) {
    this.element = element
    this._init()
  }

  _init() {
    this._setEmailMask()
    this._setDateMask()
  }

  _setEmailMask() {
    if (this.element.matches('._mask_email')) {
      const input = this.element.querySelector('.js-text-field__input')
      const im = new Inputmask('email', {
        mask: "*{3,20}@*{3,20}.*{2,7}"
      })

      im.mask(input)
    }
  }

  _setDateMask() {
    if (this.element.matches('._mask_date')) {
      const input = this.element.querySelector('.js-text-field__input')
      const im = new Inputmask('datetime', {
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
        min: '01.01.1900',
        max: '01.01.2021',
      })

      im.mask(input)
    }
  }
}

export default TextField
