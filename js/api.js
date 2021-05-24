(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

const url = "http://api.skole.tech/wp-json/wp/v2/posts";

const cardContainer = document.querySelector(".content")

async function getBlog() {
	try {
		const response = await fetch(url);
		const jsonResults = await response.json();
		const blogCard = jsonResults
		console.log(blogCard);

		blogCard.forEach(function (value) {
			document.querySelector('section').innerHTML += `
			<a href="postDetail.html?id=${value.id}">
			<img class="item" src="${value.better_featured_image.media_details.sizes.medium.source_url}" />
            </a>
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