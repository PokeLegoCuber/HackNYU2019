let showPrompt = function() {
	document.querySelector('.prompt input').value = 1;
	document.querySelector('.prompt').classList.add('show');
}

let hidePrompt = function() {
	document.querySelector('.prompt').classList.remove('show');
}

let invokeCam = function() {
	document.querySelector('.prompt .hiddencam').click()
	let pic = document.querySelector('.prompt .hiddencam').files[0]
}

let loadPic = function(e) {
	// document.querySelector('#output').src = URL.createObjectURL(file);
	let file = e.srcElement.files[0]
	let formData = new FormData();
	formData.append('files[0]', file)
	axios.post('/api/upload',formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}).then(x => {
		console.log('success', x)
	}).catch(x => {
		console.log('fail', x)
	})
}
// 	window.addEventListener('load', () => {
// 	  document.querySelector('.start-btn').addEventListener('click', showPrompt)
// 	  document.querySelector('.prompt .back-btn').addEventListener('click', hidePrompt)
// 	  document.querySelector('.prompt .scam-btn').addEventListener('click', invokeCam)
// 	})