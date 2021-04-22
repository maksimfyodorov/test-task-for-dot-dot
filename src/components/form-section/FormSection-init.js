import FormSection from './FormSection'

const allFormSections = Array.from(document.querySelectorAll('.form-section'))
const requiredFormSections = allFormSections.filter(el => el.querySelector('.form-section__checkbox'))

requiredFormSections.forEach(formSection => {
  new FormSection(formSection)
})
