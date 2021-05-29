const cardContainerTwo = document.querySelector(".cardTwo")

async function getBlogTwo() {
	try {
		const responseTwo = await fetch(url);
		const jsonResultsTwo = await responseTwo.json();
		const blogCardTwo = jsonResultsTwo
		console.log(blogCardTwo);

		blogCardTwo.forEach(function (value) {
			document.querySelector('.section').innerHTML += `
			<div class="cardTwo"">
			<a href="postDetail.html?id=${value.id}">
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
			<div id="cardTitle"
			<h4>${value.title.rendered}</h4>
			</div>
			</a>
			</div>
        `;
		});
	} catch (error) {
		document.querySelector('.alertTwo') += showAlertTouser(error, 'something is wrong');
	} finally {
		setTimeout(function () {
			document.querySelector('.alertTwo').innerHTML = '';
		}, 3000);
	}
}

getBlogTwo();