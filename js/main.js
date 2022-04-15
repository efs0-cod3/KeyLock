let btn = document.querySelector('button')
let num = document.querySelector('#num')
let char = document.querySelector('#char')
let caps = document.querySelector('#caps')

btn.addEventListener('click', getPass)

function getPass() {
	let url;
	if (num.checked && char.checked && caps.checked) {
		url = `https://passwordinator.herokuapp.com?${num.value}&${char.value}&${caps.value}`
	} else if (num.checked && char.checked) {
		url = `https://passwordinator.herokuapp.com?${num.value}&${char.value}`
	} else if (char.checked && caps.checked) {
		url = `https://passwordinator.herokuapp.com?${char.value}&${caps.value}`
	} else if (caps.checked && num.checked) {
		url = `https://passwordinator.herokuapp.com?${caps.value}&${num.value}`
	} else if (num.checked) {
		url = `https://passwordinator.herokuapp.com?${num.value}`
	} else if (caps.checked) {
		url = `https://passwordinator.herokuapp.com?${caps.value}`
	} else if (char.checked) {
		url = `https://passwordinator.herokuapp.com?${char.value}`
	} else {
		url = `https://passwordinator.herokuapp.com`
	}

	fetch(url)
		.then((res) => res.json())
		.then((data) => {

			document.querySelector('.passField').innerText = `Generating your password...`
			setTimeout(generating, 1000);

			function generating() {
				document.querySelector('.passField').innerText = data.data
			}
		})
}