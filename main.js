import './index.css'

/** @type {HTMLFormElement|null} */
const form = document.getElementById('form')

/** @param {SubmitEvent} event */
const handleSubmit = event => { event.preventDefault()
	/** @type {HTMLFormElement} */
	const currentTarget = event.currentTarget
	if (!currentTarget) {
		return
	}
	/** Словарь, который содержит пары ключ/значение, где
		* ключ является именем поля, а
		* значение является значением поля.
	*/
	const dictionary = Array.from(currentTarget.elements, element => [element.name, element.value])
}

form.addEventListener('submit', handleSubmit)
