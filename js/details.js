const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
async function getBlogg() {
console.log()

try {
const response = await fetch('http://api.skole.tech/wp-json/wp/v2/posts/?id=' + id);
const jsonResults = await response.json();
const value = jsonResults.id;

document.title = jsonResults.slug;
document.querySelector('main').innerHTML += `
<div class="content">
    <img src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
    <h2>${value.slug}</h2>
    <p>${value.content.rendered}</p>
</div>
`;
} catch (error) {
} finally {
}
}
getBlogg(id);
