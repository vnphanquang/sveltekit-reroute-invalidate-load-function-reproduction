/** @type {Record<string, string>} */
const translated = {
	'/en': '/',
};

/** @type {import('@sveltejs/kit').Reroute} */
export function reroute({ url }) {
	console.log(`REROUTE`, url.toString());
	if (url.pathname in translated) {
		return translated[url.pathname];
	}
}