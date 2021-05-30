const idFour =
  "https://noroffcors.herokuapp.com/https://api.skole.tech/wp-json/wp/v2/posts/125";

async function getPostFour() {
  const responseFour = await fetch(idFour);
  const jsonResultsFour = await responseFour.json();
  console.log(jsonResultsFour);

  document.querySelector(".span").innerHTML += `
			<div class="cardSpan">
            <a class="" href="postDetail.html?id=${jsonResultsFour.id}">
            <div>
			<img alt="${jsonResultsFour.better_featured_image.alt_text}" class="imgSpan" src="${jsonResultsFour.better_featured_image.media_details.sizes.medium_large.source_url}" />
			</div>
            <div>
            <h3 class="largeDesc">${jsonResultsFour.title.rendered}</h3>
            </div>
            </a>
			</div>
        `;
}

getPostFour();
