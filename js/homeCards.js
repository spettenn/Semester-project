
async function getItem() {
	try {
      
		const response = await fetch(url);
		const jsonResults = await response.json();
		const blogg = jsonResults
		console.log(blogg);

        for (let i = 0; i <= max.length; i++) {
		blogg.array.forEach(element => {
            
        });(function (value) {
			document.querySelector('main').innerHTML += `
		
        `;
		});
	} 
}
    catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'something is wrong');
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getItem();