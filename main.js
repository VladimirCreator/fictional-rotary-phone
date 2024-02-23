import './index.css'

/** @param {HTMLFormElement} element */
function constructObjectFromFormElement(element) {
	const object = {}
	Array.from(element.elements, el => console.log(el.checked))
	Array.from(element.elements, ({ name, value, multiple, checked }) => {
		if (name in object && !checked) {
			return
		}
		object[name] = value
	})
	return object
}

/** @type {HTMLFormElement|null} */
const dialog = document.getElementById('dialog')
const form = document.getElementById('form')
const target = document.getElementById('json')

/** @param {ToggleEvent} event */
const handleToggle = event => {
	if (event.newState.includes('open')) {
		return
	}
	target.innerText = JSON.stringify(constructObjectFromFormElement(form))
}

dialog.addEventListener('toggle', handleToggle)
