import CheckboxList from './CheckboxList'

const AllCheckboxLists = Array.from(document.querySelectorAll('.js-checkbox-list'))
const expandableCheckboxLists = AllCheckboxLists.filter(el => el.matches('._is-expandable'))

expandableCheckboxLists.forEach(checkboxList => {
  new CheckboxList(checkboxList)
})
