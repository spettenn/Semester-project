async function getBlog() {
	try {
		const response = await fetch('http://api.skole.tech/wp-json/wp/v2/posts');
		const jsonResults = await response.json();
		const blogCard = jsonResults
		console.log(blogCard);

		blogCard.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">
                    <h2>${value.slug}</h2>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'something is wrong');
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getBlog();