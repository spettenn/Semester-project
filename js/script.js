async function getBlog() {
	try {
		const response = await fetch('http://api.skole.tech/wp-json/wp/v2/posts');
		const jsonResults = await response.json();
		const blogCard = jsonResults
		console.log(blogCard);

		blogCard.forEach(function (value) {
			document.querySelector('main').innerHTML += `
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
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