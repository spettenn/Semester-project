const idTwo =
  "https://noroffcors.herokuapp.com/https://api.skole.tech/wp-json/wp/v2/posts/140";

async function getPostTwo() {
  const responseTwo = await fetch(idTwo);
  const jsonResultsTwo = await responseTwo.json();
  console.log(jsonResultsTwo);

  document.querySelector(".cardContainerTwo").innerHTML += `
			<div class="cardTwo">
            <a class="smallCard" href="postDetail.html?id=${jsonResultsTwo.id}">
            <div id="innerTxt">
            <h3>${jsonResultsTwo.title.rendered}</h3>
            </div>
            <div>
			<img alt="${jsonResultsTwo.better_featured_image.alt_text}" class="imgMedium" src="${jsonResultsTwo.better_featured_image.media_details.sizes.medium_large.source_url}" />
			</div>
            </a>
			</div>
        `;
}

getPostTwo();
