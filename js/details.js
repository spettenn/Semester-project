const queryString = document.location.search;
const params = new URLSearchParams(queryString);
async function getBlogg() {
  const id = params.get("id");
  console.log({ id });

  try {
    const response = await fetch(
      `http://api.skole.tech/wp-json/wp/v2/posts/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonResults = await response.json();
    console.log({ jsonResults });
    const {
      slug,
      content: { rendered: content },
      title: { rendered: title },
      better_featured_image,
    } = jsonResults;
    const { media_details } = better_featured_image;

    document.title = title;
    document.querySelector("main").innerHTML += `
<div class="content">
    <img src="${media_details.sizes.medium.source_url}" />
    <h2>${title}</h2>
    <p>${content}</p>
</div>
`;
  } catch (error) {
    console.log({ error });
  } finally {
  }
}
getBlogg();
