import type { SupabaseClient } from '@supabase/supabase-js';
// import imageCompression, { type Options } from 'browser-image-compression';
import { toast } from 'svelte-sonner';

// export const compressImage = async (file: File, opts?: Options) => {
// 	const options: Options = {
// 		maxSizeMB: 1,
// 		useWebWorker: true,
// 		preserveExif: true,
// 		fileType: 'image/webp',
// 		...opts
// 	};

// 	try {
// 		const compressedFile = await imageCompression(file, options);
// 		return compressedFile;
// 	} catch (error) {
// 		console.error('Error compressing image:', error);
// 		throw error;
// 	}
// };

// export const compressImages = async (files: FileList, opts?: Options) => {
// 	const compressedFiles = await Promise.all(
// 		Array.from(files).map((file) => compressImage(file, opts))
// 	);

// 	return compressedFiles;
// };

export const getSupabaseImageUrl = (supabase: SupabaseClient, path: string) => {
	return supabase.storage.from('users').getPublicUrl(path).data.publicUrl;
};

export async function uploadImage(file: File, userId: string, supabase: SupabaseClient) {
	if (file.size > 3 * 1024 * 1024) {
		toast.error('Ukuran gambar terlalu besar, maksimal 3MB');
		return;
	}

	const filename = file.name.split('.').slice(0, -1).join('.');
	const fileExt = file.name.split('.').pop();
	const uploadPath = `${userId}/${filename}-${new Date().valueOf()}.${fileExt}`;

	const { data, error } = await supabase.storage.from('users').upload(uploadPath, file);

	if (error || !data) {
		toast.error('Gagal mengunggah gambar');
	}

	return data;
}
