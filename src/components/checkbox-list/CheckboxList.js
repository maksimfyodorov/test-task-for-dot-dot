class CheckboxList {
  constructor(element) {
    this.checkboxList = element
    this._init()
  }

  _init() {
    this._getDomElements()
    this._addEventListeners()
  }

  _getDomElements() {
    this.title = this.checkboxList.querySelector('.checkbox-list__title')
  }

  _addEventListeners() {
    this.title.addEventListener('click', this._handleTitleClick.bind(this))
  }

  _handleTitleClick() {
    this.checkboxList.classList.toggle('_expanded')
  }
}

export default CheckboxList
