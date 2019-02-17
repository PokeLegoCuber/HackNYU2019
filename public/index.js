let totals = []

let showPrompt = function() {
  document.querySelector('.prompt .hiddencam').value = null;
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

let showLoader = function() {
  document.querySelector('.loader').classList.add('show');
}

let hideLoader = function() {
  document.querySelector('.loader').classList.remove('show', 'fail', 'success');
}

let failLoader = function() {
  document.querySelector('.loader').classList.add('fail');
  setTimeout(() => {
    hideLoader()
  }, 2000);
}

let successLoader = function(info) {
  document.querySelector('.loader').classList.add('success');
  setTimeout(() => {
    showInfo(info)
    hideLoader()
  }, 2000);
}

let showInfo = function(info) {
  document.querySelector('.info .bag').insertAdjacentHTML('beforeend', `
    <div class="head">Name:</div>
    <div>${info['name']}</div>
    <div class="head">upc:</div>
    <div>${info['upc']}</div>
  `);
  if(info['state1'].length !== 0) {
    document.querySelector('.info .bag').insertAdjacentHTML('beforeend', `
      <div class="head">Recyclable for 1 cent in:</div>
      <div>${info['state1'].join(', ')}</div>
    `);
  }
  if(info['state5'].length !== 0) {
    document.querySelector('.info .bag').insertAdjacentHTML('beforeend', `
      <div class="head">Recyclable for 5 cent in:</div>
      <div>${info['state5'].join(', ')}</div>
    `);
  }
  if(info['state10'].length !== 0) {
    document.querySelector('.info .bag').insertAdjacentHTML('beforeend', `
      <div class="head">Recyclable for 10 cent in:</div>
      <div>${info['state10'].join(', ')}</div>
    `);
  }
  document.querySelector('.info .bag').insertAdjacentHTML('beforeend', `
    <div class="head">Amt made:</div>
    <div>$${document.querySelector('.prompt input').value * 5}</div>
  `);

  document.querySelector('.info').classList.add('show');
  totals.push({
    name: info['name'],
    earn: (document.querySelector('.prompt input').value * 5)
  })
  console.log(totals)
}

let hideInfo = function() {
  document.querySelector('.info .bag').innerHTML = '';
	document.querySelector('.info').classList.remove('show');
}

let loadPic = function(e) {
  // document.querySelector('#output').src = URL.createObjectURL(file);
  hidePrompt()
  showLoader()
	let file = e.srcElement.files[0]
	let formData = new FormData();
	formData.append('files[0]', file)
	axios.post('/api/upload',formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}).then(x => {
    let success = x.data['success']
    if (success) {
      let info = x.data['info'];
      if (info) {
        successLoader(x.data['info']);
      } else {
        // TBD
        alert('entry not found in db')
        failLoader()
      }
    } else {
      failLoader()
    }
	}).catch(x => {
		console.log('fail', x)
	})
}
