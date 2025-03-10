import crypto from 'node:crypto';

/**
 * Fungsi untuk menghasilkan API key baru.
 * Menghasilkan token acak 32 byte dan mengembalikannya dengan prefix LUMINAPDF_
 */
export function generateApiKey(): string {
	const randomBytes = crypto.randomBytes(32).toString('hex'); // 64 karakter hex
	return `LUMINAPDF_${randomBytes}`;
}
