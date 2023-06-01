"use strict";

(function () {
	auth_url = "https://web-auth-verify-function.pages.dev/auth";

	fetch(auth_url, {
		method: "POST",
		body: JSON.stringify({ key: password, sault: sault }),
		headers: { "Content-Type": "application/json" },
	})
		.then((resp) => resp.json())
		.then((resp) => {
			window.bookSearchIndex = FlexSearch.create("balance", indexConfig);
			window.bookSearchIndex.add(pages);
		})
		.then(() => (input.required = false))
		.then(search);
})();
