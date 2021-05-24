
async function getItem() {
	try {
      
		const response = await fetch(url);
		const jsonResults = await response.json();
		const blogg = jsonResults
		console.log(blogg);

        const max = 4;
        for (let i = 0; i <= max.length; i++) {
		blogg(function (value) {
			document.querySelector('main').innerHTML += `
			<div class="cardOne">
            <a href="postDetail.html?id=${value.id}">
            <img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
            <h4 class="cardTitle">${value.title.rendered}</h4>
            </a>
            </div>
            <div class="containerCards">
            <div class="innerCard">
            <a href="postDetail.html?id=${value.id}">
            <h4 class="cardTitle">${value.title.rendered}</h4>
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
			</a>
            </div>
            <div class="innerCard">
            <a href="postDetail.html?id=${value.id}">
            <h4 class="cardTitle">${value.title.rendered}</h4>
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
			</a>
            </div>
            </div>

            <div class="spanCard">
            <img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
            <h4 class="cardTitle">${value.title.rendered}</h4>
            </div> 

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

