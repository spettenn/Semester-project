
async function getBlog() {
	try {
		const response = await fetch(url);
		const jsonResults = await response.json();
		const blogCard = jsonResults
		console.log(blogCard);

		blogCard.forEach(function (value) {
			document.querySelector('section').innerHTML += `
			<div class="card hidden-item">
			<a href="postDetail.html?id=${value.id}">
			<img class="cardImg" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
			<h4 class="cardTitle">${value.title.rendered}</h4>
			</a>
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
var button = document.querySelector('.toggle-button');

button.addEventListener('click', function (event) {
  let hiddenItems = Array.prototype.slice.call(document.querySelectorAll('.hideable'));
  
  let showing = button.textContent === "Show more items";

  hiddenItems.forEach(function(item){
    if(!showing){
      // If we are hiding, then add the .hidden-item class
      item.classList.add("hidden-item");
    } else {
      // Otherwise remove the .hidden-item class
      item.classList.remove("hidden-item");
    }
    button.textContent = button.textContent === "Show more items" ? "Hide items" : "Show more items";
  });
});