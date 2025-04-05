import { PRIVATE_API_DOCS_URL } from '$env/static/private';

export const prerender = true;

export const load = async () => {
	return {
		API_DOCS_URL: PRIVATE_API_DOCS_URL
	};
};
