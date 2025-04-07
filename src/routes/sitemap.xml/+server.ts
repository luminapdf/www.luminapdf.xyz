import { PUBLIC_APP_DOMAIN } from '$env/static/public';
import * as sitemap from 'super-sitemap';

export const GET = async () => {
	return await sitemap.response({
		origin: PUBLIC_APP_DOMAIN
	});
};
