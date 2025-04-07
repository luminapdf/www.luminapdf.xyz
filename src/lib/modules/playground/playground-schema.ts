import { z } from 'zod';

export const pdfGenerationSchema = z.object({
	source: z.string().url().min(1, 'Source is required'),
	format: z.string().optional(),
	margin: z.string().optional()
});

export type PDFGenerationSchema = z.infer<typeof pdfGenerationSchema>;

export const screenshotGenerationSchema = z.object({
	source: z.string().url().min(1, 'Source is required'),
	width: z.number(),
	height: z.number(),
	fullPage: z.boolean().optional()
});

export type ScreenshotGenerationSchema = z.infer<typeof screenshotGenerationSchema>;
