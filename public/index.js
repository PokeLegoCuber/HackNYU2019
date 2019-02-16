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
	let file = e.srcElement.files[0]
	// document.querySelector('#output').src = URL.createObjectURL(file);
}

// 	window.addEventListener('load', () => {
// 	  document.querySelector('.start-btn').addEventListener('click', showPrompt)
// 	  document.querySelector('.prompt .back-btn').addEventListener('click', hidePrompt)
// 	  document.querySelector('.prompt .scam-btn').addEventListener('click', invokeCam)
// 	})