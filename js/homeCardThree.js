const idThree =
  "https://noroffcors.herokuapp.com/https://api.skole.tech/wp-json/wp/v2/posts/132";

async function getPostThree() {
  const responseThree = await fetch(idThree);
  const jsonResultsThree = await responseThree.json();
  console.log(jsonResultsThree);

  document.querySelector(".cardContainerTwo").innerHTML += `
			<div class="cardTwo">
            <a class="smallCard" href="postDetail.html?id=${jsonResultsThree.id}">
            <div id="innerTxt">
            <h3>${jsonResultsThree.title.rendered}</h3>
            </div>
            <div>
			<img alt="${jsonResultsThree.better_featured_image.alt_text}" class="imgMedium" src="${jsonResultsThree.better_featured_image.media_details.sizes.medium_large.source_url}" />
			</div>
            </a>
			</div>
        `;
}

getPostThree();
