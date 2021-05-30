const idOne =
  "https://noroffcors.herokuapp.com/https://api.skole.tech/wp-json/wp/v2/posts/143";

async function getPost() {
  try {
    const response = await fetch(idOne);
    const jsonResults = await response.json();
    console.log(jsonResults);
    const {
      title: { rendered: title },
    } = jsonResults;

    document.querySelector(".cardContainerOne").innerHTML += `
			<div class="cardOne">
            <a href="postDetail.html?id=${jsonResults.id}">
			<img alt="${jsonResults.better_featured_image.alt_text}" class="imgLarge" src="${jsonResults.better_featured_image.media_details.sizes.medium_large.source_url}"/>
			<h4 class="cardTitle">${title}</h4>
			</a>
			</div>
        `;
  } catch (error) {
    console.log({ error });
  } finally {
    setTimeout(function () {
      document.querySelector(".fail").innerHTML = "yep, its failing...";
    }, 3000);
  }
}

getPost();
